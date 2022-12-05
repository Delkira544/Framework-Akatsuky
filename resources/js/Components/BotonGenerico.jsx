import React from 'react';

export default function BotonGenerico({color,  type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-`+ color + `-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-`+color+`-500 active:bg-`+color+`-700 focus:outline-none focus:ring-2 focus:ring-`+color+`-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
