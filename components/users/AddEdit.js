import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "..";
import { userService } from "../../service";
import { useConfigContext, ConfigProvider } from "../../context/configContext";

const AddEdit = (props) => {
  const user = props?.user;
  const isAddMode = !user;
  const router = useRouter();
  const config = useConfigContext(ConfigProvider);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    username: Yup.string()
      .required('User name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    website: Yup.string()
      .required('website is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  if (!isAddMode) {
    const { ...defaultValues } = user;
    formOptions.defaultValues = defaultValues;
  }

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = data => {
    return isAddMode
      ? createUser(data)
      : updateUser(user.id, data);
  };

  const createUser = data => {
    return userService.create(data)
      .then(() => {
        console.log('User add...');
        router.push('.');
      })
      .catch(e => console.log('error add user: ', e));
  };

  const updateUser = (id, data) => {
    return userService.update(id, data)
      .then(() => {
        console.log('user updated: ');
        router.push('..');
      })
      .catch((e) => console.log('error in update: ', e));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{isAddMode ? 'Add User' : 'Edit User'} ({config.titleApplication})</h1>
      <div className="form-row">
        <div className="form-group col-5">
          <label>Name</label>
          <input name="name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-7">
          <label>Email</label>
          <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="form-group col">
          <label>UserName</label>
          <input name="username" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        <div className="form-group col">
          <label>Website</label>
          <input name="website" {...register('website')} className={`form-control ${errors.website ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.website?.message}</div>
        </div>
      </div>
      {!isAddMode &&
        <div>
          <h3 className="pt-3">Change Password</h3>
          <p>Leave blank to keep the same password</p>
        </div>
      }
      <div className="form-group">
        <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
          {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
            Save
        </button>
        <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
        <Link href="/users" className="btn btn-link">Cancel</Link>
      </div>
    </form>
  );
}

export { AddEdit };