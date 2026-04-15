import React, { useEffect, useState } from "react";
import FriendCard from "../Components/FriendCard";
import { FaPlus } from "react-icons/fa";

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/Data.json")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    const total = friends.length;
    const onTrack = friends.filter(f => f.status === "on-track").length;
    const needAttention = friends.filter(f => f.status !== "on-track").length;

    return (
        <div className="container mx-auto px-4 mb-20">
            <div className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="btn bg-green-800 text-white border-none">
                    <FaPlus /> Add a Friend
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-base-100 shadow rounded-xl p-6 text-center">
                    <h2 className="text-3xl font-bold">{total}</h2>
                    <p className="text-gray-500">Total Friends</p>
                </div>
                <div className="bg-base-100 shadow rounded-xl p-6 text-center">
                    <h2 className="text-3xl font-bold">{onTrack}</h2>
                    <p className="text-gray-500">On Track</p>
                </div>
                <div className="bg-base-100 shadow rounded-xl p-6 text-center">
                    <h2 className="text-3xl font-bold">{needAttention}</h2>
                    <p className="text-gray-500">Need Attention</p>
                </div>
                <div className="bg-base-100 shadow rounded-xl p-6 text-center">
                    <h2 className="text-3xl font-bold">12</h2>
                    <p className="text-gray-500">Interactions This Month</p>
                </div>
            </div>

            <div className="border-t mb-8 border-gray-300"></div>
            <h2 className="text-2xl font-semibold mb-6">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    friends.map(friend => (
                        <FriendCard key={friend.id} friend={friend} />
                    ))
                }
            </div>

        </div>
    );
};

export default Home;