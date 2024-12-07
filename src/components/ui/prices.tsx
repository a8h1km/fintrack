import React from 'react';

const Prices = () => {
    return (
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                {/* Free Plan */}
                <div className="divide-y bg-gray-200 divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Free
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">Perfect for individuals exploring the basics.</p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $0 </strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>

                        <a
                            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What&apos;s included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li>✔ Single user</li>
                            <li>✔ AI Analysis</li>
                            <li>✔ Email support</li>
                            <li>✘ Help center access</li>
                            <li>✘ Phone support</li>
                            <li>✘ Community access</li>
                        </ul>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="divide-y bg-gray-200 divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">Great for professionals managing teams.</p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $30 </strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>

                        <a
                            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What&apos;s included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li>✔ Up to 10,000 users</li>
                            <li>✔ AI Analysis</li>
                            <li>✔ Email support</li>
                            <li>✔ Help center access</li>
                            <li>✘ Phone support</li>
                            <li>✘ Community access</li>
                        </ul>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="divide-y bg-gray-200 divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Enterprise
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">Ideal for large-scale businesses.</p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $100 </strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>

                        <a
                            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What&apos;s included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li>✔ Unlimited users</li>
                            <li>✔ Detailed AI Analysis</li>
                            <li>✔ Email support</li>
                            <li>✔ Help center access</li>
                            <li>✔ Phone support</li>
                            <li>✔ Community access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
