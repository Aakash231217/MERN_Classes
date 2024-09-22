import React from "react";

const Modal = ({ isOpen, onClose, nftData }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="nftModal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">NFT Minted Successfully!</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Your NFT has been minted and is now available on OpenSea.
            </p>
          </div>
          {nftData && (
            <div className="mt-4">
              <p className="text-sm text-gray-700">Name: {nftData.name}</p>
              <p className="text-sm text-gray-700">Description: {nftData.description}</p>
              <img src={nftData.image_url} alt="NFT" className="mt-2 mx-auto w-64 h-64 object-cover" />
            </div>
          )}
          <div className="items-center px-4 py-3">
            <button
              id="closeModal"
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
