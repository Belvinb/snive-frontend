import React, { useEffect } from "react";
import { useState } from "react";
import api from "../Utils/axiosConfig";
import getAuthHeaders from "../Utils/getAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const result = await api.get("/note/all-notes", getAuthHeaders());
    setNotes(result.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/note/delete-note/${id}`, getAuthHeaders());
  };
  return (
    <div className="max-w-lg mx-auto flex flex-col mt-20  items-center  ">
      <div className="flex items-center mb-5">
        <h1 className="text-2xl font-semibold mr-4">Notes</h1>
        <button
          onClick={() => navigate("/add-note")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Note
        </button>
      </div>
      <div
        className=" w-full max-h-[25rem] p-2 overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {notes?.length === 0 ? (
          <h1 className="text-center">No data to show</h1>
        ) : (
          notes?.map((data, index) => (
            <div
              key={index}
              className="border p-2 shadow-md rounded-md flex flex-col "
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h1>{data.title}</h1>
                  <h3>{data.description}</h3>
                </div>
                <div>
                  <button
                    onClick={() => navigate(`/view-note/${data._id}`)}
                    className=" bg-blue-300 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleDelete(data._id)}
                    className=" hover:bg-gray-200 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
