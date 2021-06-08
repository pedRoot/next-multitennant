import { Link } from "components";
import { useConfigContext } from "contexts/configContext";

const Home = () => {
  const {config} = useConfigContext();

  return (
    <div>
      <h1>Example for Rect Hook Form</h1>
      <h3>{config.titleApplication}</h3>
      <p>
        <Link href="/users">&gt;&gt; Manage Users</Link>
      </p>
    </div>
  )
}

export default Home;