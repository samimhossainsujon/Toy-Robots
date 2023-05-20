import React from "react";


const Discount = () => {
    return (
        <div className="px-5 mx-5 mb-10">
            <div className="mt-10">
                <h2 className="underline text-center font-extrabold text-black text-3xl">Discount Going On</h2>
                <div className="flex my-container items-center bg-base-100  align-middle justify-center mt-7">

                    <div>
                        <div className="grid grid-flow-col gap-5  auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 54 }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">

                                <h2 className="text-5xl font-extrabold font-serif mt-5  text-blue-gray-900">Robot Toy this week</h2>
                                <h5 className="text-2xl mt-3 font-bold  font-sans">New Collection 50% OFF!!</h5>

                                <div className="radial-progress bg-primary text-primary-content border-4 border-primary mt-3" style={{ "--value": 70 }}>Cozmo</div>
                                <div className="radial-progress bg-primary text-secondary-content border-4 border-secondary mt-3  ml-3" style={{ "--value": 70 }}>Dash</div>
                                <div className="radial-progress bg-accent text-accent-content border-4 border-accent mt-3 ml-3" style={{ "--value": 70 }}>Sphere</div>
                            </div>
                        </div>

                    </div>



                    <div className="avatar">
                        <div className="w-96 mask mask-hexagon bg-purple-900">
                            <img className="w-96 rounded-3xl" src='https://i.ibb.co/GPQQqS7/rock-n-roll-monkey-LEPh-Zk-Qb-Urk-unsplash.jpg' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;

