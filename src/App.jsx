import { user } from "./assets/assest";

function App() {
  return (
    <main className="flex justify-center p-4 ">
      <div className=" mt-12 border w-full p-5 border-gray-900">
        <h1 className=" text-3xl">
          REACT CRUD APP WITH{" "}
          <span className=" text-blue-500 font-bold">REDUX</span>{" "}
        </h1>
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3 mb-5"
        >
          Create +
        </button>
        <div className="flex justify-between">
          <div>
            <p className=" text-xl font-semibold">id</p>
            <p className=" font-semibold mt-3">{user.map((item) => item.id)}</p>
          </div>
          <div>
            {" "}
            <p className=" text-xl font-semibold">Name</p>
            <p className=" mt-3 font-semibold">
              {user.map((item) => item.name)}
            </p>
          </div>
          <div>
            {" "}
            <p className=" text-xl font-semibold">Email</p>
            <p className=" mt-3 font-semibold">
              {user.map((item) => item.email)}
            </p>
          </div>
          <div>
            {" "}
            <p className=" text-xl  font-semibold mb-3">Action</p>
            <div className=" flex justify-between items-center">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>
              <button
                type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delet
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
