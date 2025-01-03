import { useState } from "react";
import EditAddress from "./components/editAddress";
import { produce } from "immer";

function App() {
  const [user, setUser] = useState({
    _id: 4,
    email: "u1@market.com",
    name: "데이지",
    phone: "01044445555",
    address: "서울시 강남구 논현동 222",
    type: "user",
    createdAt: "2024.01.25 21:08:14",
    updatedAt: "2024.02.04 09:38:14",
    extra: {
      birthday: "11-30",
      membershipClass: "MC02",
      addressBook: [
        {
          id: 1,
          name: "회사",
          value: "서울시 강동구 천호동 123",
        },
        {
          id: 2,
          name: "집",
          value: "서울시 강동구 성내동 234",
        },
      ],
    },
  });

  const handleAddressChange = (event) => {
    // const newAddressBook = user.extra.addressBook.map((address) => {
    //   if (address.id === Number(event.target.name)) {
    //     return { ...address, value: event.target.value };
    //   } else {
    //     return address;
    //   }
    // });
    // const newState = {
    //   ...user,
    //   extra: {
    //     ...user.extra,
    //     addressBook: newAddressBook,
    //   },
    // };

    // user를 복사한 새로운 객체(draft)를 만들어 반환
    const newState = produce(user, (draft) => {
      const address = draft.extra.addressBook.find(
        (address) => address.id === Number(event.target.name)
      );
      address.value = event.target.value;
    });

    console.log("user", user === newState);
    console.log("user.extra", user.extra === newState.extra);
    console.log(
      "user.extra.addressBook",
      user.extra.addressBook === newState.extra.addressBook
    );
    console.log(
      "회사",
      user.extra.addressBook[0] === newState.extra.addressBook[0]
    );
    console.log(
      "집",
      user.extra.addressBook[1] === newState.extra.addressBook[1]
    );
    console.log(
      "회사 주소",
      user.extra.addressBook[0].value === newState.extra.addressBook[0].value
    );
    console.log(
      "집 주소",
      user.extra.addressBook[1].value === newState.extra.addressBook[1].value
    );
    console.log("기존 회사 주소", user.extra.addressBook[0].value);

    setUser(newState);
  };
  return (
    <>
      <h2>상태관리 대상이 복합 객체일 경우 불변성 관리</h2>
      <p>
        이메일: {user.email}
        <br />
        이름: {user.name}
        <br />
        전화번호: {user.phone}
        <br />
      </p>
      <ul>
        {user.extra.addressBook?.map((address) => (
          <li key={address.id}>
            {address.name}: {address.value}
          </li>
        ))}
      </ul>
      <p>
        <EditAddress
          addressBook={user.extra.addressBook}
          handleAddressChange={handleAddressChange}
        />
      </p>
    </>
  );
}

export default App;
