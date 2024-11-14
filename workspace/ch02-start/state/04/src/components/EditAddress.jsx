import { Fragment } from "react";

export default function EditAddress({ addressBook, handleAddressChange }) {
  const list = addressBook.map((address) => {
    return (
      <Fragment key={address.id}>
        <label htmlFor={address.id}>
          <input
            id={address.id}
            type="text"
            name={address.name}
            value={address.value}
            onChange={handleAddressChange}
          />
        </label>
        <br />
      </Fragment>
    );
  });

  return list;
}
