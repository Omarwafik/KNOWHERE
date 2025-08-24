import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rooms } from "../../data/data";

export default function Rooms() {
  const { category } = useParams();
    const navigate = useNavigate(); // 👈
  const filteredRooms = rooms.filter((r) => r.category === category);
  const [selectedRoom, setSelectedRoom] = useState(filteredRooms[0]);

  return (
    <div className="grid grid-cols-3 gap-4 p-6 py-12 m-20 h-[85vh]">
      {/* List على الشمال */}
      <div className=" col-span-1 border-r pr-4 flex flex-col gap-16">
        <h2 className="text-3xl font-bold mb-4">{category}</h2>
        <ul className="space-y-2">
          {filteredRooms.map((room) => (
            <li
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`p-3 rounded-lg cursor-pointer transition 
                ${
                  selectedRoom?.id === room.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {room.name}
            </li>
          ))}
        </ul>
        <div className="button text-center">
          <button className="px-3 py-1 bg-primary text-white hover:bg-secondary rounded"onClick={() => navigate(-1)} >Go back</button>
        </div>
      </div>

      {/* التفاصيل على اليمين */}
      <div className="col-span-2">
        {selectedRoom ? (
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-2">{selectedRoom.name}</h3>
            <p className="text-gray-500 mb-4">
              Capacity: {selectedRoom.capacity}
            </p>

            {/* الصور */}
            {selectedRoom.img.length > 0 ? (
              <div className="mb-4">
                <img
                  src={selectedRoom.img[0]}
                  alt={selectedRoom.name}
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
            ) : (
              <div className="mb-4 bg-gray-200 h-64 flex items-center justify-center rounded-xl">
                No Image
              </div>
            )}

            <p className="mb-2">{selectedRoom.description}</p>
            <p className="text-sm text-gray-600">
              Facilities: {selectedRoom.facilities}
            </p>
            {/* <p className="text-sm text-gray-600">
              Facilities: {selectedRoom.facilities}
            </p> */}

            {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
              Book Now
            </button> */}
          </div>
        ) : (
          <p>No rooms available for this category.</p>
        )}
      </div>
    </div>
  );
}
