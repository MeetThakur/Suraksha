import React from "react";

function Profile() {
  const [name, setName] = React.useState("John Doe");
  const [address, setAddress] = React.useState("123 Main St, City, State");
  const [phone, setPhone] = React.useState("(123) 456-7890");
  const [email, setEmail] = React.useState("john.doe@example.com");
  const [editMode, setEditMode] = React.useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <>
      <div className="w-full h-10 text-white font-extrabold text-[5vh] mt-4 flex justify-center items-center">
        <img src="/src/Icons/profile.png" className="" alt="" />
        Admin
      </div>
      <div>
        <section className="mt-8">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold">User Information</h2>
            {!editMode && (
              <button
                className="ml-2 text-blue-500 underline"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
            {editMode && (
              <button
                className="ml-2 text-blue-500 underline"
                onClick={handleSaveClick}
              >
                Save
              </button>
            )}
          </div>
          <div>
            <p className="mb-2">
              <span className="font-bold">Name:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <span>{name}</span>
              )}
            </p>
            <p className="mb-2">
              <span className="font-bold">Address:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <span>{address}</span>
              )}
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <span>{phone}</span>
              )}
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <span>{email}</span>
              )}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
