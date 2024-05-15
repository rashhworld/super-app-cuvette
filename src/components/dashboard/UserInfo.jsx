import React from 'react';

function UserInfo() {
    const user = JSON.parse(localStorage.getItem('userData'));
    const genreData = JSON.parse(localStorage.getItem('genreData'));

    return (
        <div className="bg-[#5746EA] flex items-center rounded-2xl p-5">
            <div>
                <img src="/images/profile/user.large.png" alt="" />
            </div>
            <div className="text-white ms-5">
                <div>
                    {user ? (
                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p className="text-3xl">{user.username}</p>
                        </div>
                    ) : (
                        <p>No user found.</p>
                    )}
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                    {genreData ? genreData.map((genre) => {
                        return (
                            <button className="flex-grow rounded-3xl bg-[#9F94FF] text-white py-1 px-4 focus:outline-none" key={genre.id}>{genre.name}</button>
                        );
                    }) : (
                        <p>No genre found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserInfo