import { user } from "./assets/assest";

function App() {
  return (
    <main className="  p-5 flex justify-center">
      <div className=" border border-gray-800 w-[900px] p-5">
        <h1 className=" sm:text-4xl font-bold  text-center text-3xl">
          REACT CRUD APP WITH <span className=" text-purple-800">REDUX</span>
        </h1>
        <div className="flex justify-start mt-3">
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create +
          </button>
        </div>
        <table className=" w-full">
          <thead className=" text-center ">
            <tr className="">
              <td className=" text-2xl font-bold   ">Id</td>
              <td className=" text-2xl font-bold">Name</td>
              <td className=" text-2xl font-bold"> Email</td>
              <td className=" text-2xl font-bold">Action</td>
            </tr>
          </thead>
          <tbody className=" text-center ">
            {user.map((item) => (
              <tr className="border-y ">
                <td className=" py-4">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className="flex justify-center ">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
