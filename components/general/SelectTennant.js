import { useConfigContext } from "contexts/configContext";

const SelectTennant = props => {
  const config = useConfigContext()

  const tennants = [
    { label: 'General', value: 'general' },
    { label: 'TNX', value: 'tnx' },
    { label: 'BDB', value: 'bdb' }
  ];

  const handleChange = (e) => {
    config.handleChangeTennant(e.target.value);
  };

  return (
    <form className="form-inline">
      <select className="my-2 my-sm-0" name="select-tennat" onChange={(e) => handleChange(e)}>
        <option value="general">General</option>
        <option value="bdb">DBD</option>
        <option value="tnx">TNX</option>
      </select>
    </form>
  )
}

export { SelectTennant }
