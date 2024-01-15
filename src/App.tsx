
import React, { useEffect, useState } from 'react';
import userData, { UserData } from './data/data';


function App() {
  //use for state management
  const [data, setData] = useState<UserData[]>(userData);
  const [showData, setShowData] = useState<UserData[]>(userData);
  const [searchData, setSearchData] = useState<string>("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  const handleClick = (id:number) => {
    const updatedData: UserData[] = data.map((user) =>
    user.id === id ? { ...user, isSelected: true } : user
  );
 setShowData(updatedData)
 setData(updatedData)
 setSearchData("")
  };

  const removeItem=(id:number)=>{
    const updatedData: UserData[] = data.map((user) =>
    user.id === id ? { ...user, isSelected: false } : user
  );
 setShowData(updatedData)
 setData(updatedData)
 setSearchData("")
  }


  useEffect(() => {
    const filteredData = data.filter((entry) =>
      entry?.name?.toLowerCase()?.includes(searchData?.toLowerCase())
    );
    setShowData(filteredData);
  }, [searchData, data]);
  return (

    <section className='h-full w-[100%] flex items-center justify-center flex-col'>
      <h1 className='  text-3xl text-bolder'>
        Umang Sahu
        <br />
        umagsahu359@gmail.com
        <br/>
       +91-9140560654
       
        </h1>


      <div className='h-fit w-[50%] flex flex-wrap m-10  border-b-2 border-indigo-500 '>

        {data?.filter((user: UserData) => (user.isSelected === true))?.map((user: UserData, index: number) => (
          // JSX code using user.badge, user.ind, and index
          <span className='m-2 w-fit inline-flex items-center justify-beetween text-sm bg-zinc-200 rounded-md gap-2 py-[1px] px-1  cursor-pointer ' key={index}>
            <img loading='lazy' src="./media/user.svg" alt="profile img" className='h-[20px] w-[20px] aspect-square rounded-full object-center' />
            <p>{user.name}</p>
            <button className='h-5 w-5 bg-zinc-100 rounded-full bg-center bg-contain p-[1pxc:\Users\umang\Downloads\cross.svg]' style={{ background: `url(./media/cross.svg) no-repeat center / contain` }} onClick={()=>removeItem(user.id)}></button>
          </span>

        ))}

        <div className='relative w-full'>
          <input
            type="text"
            onChange={handleChange}
            value={searchData}
            placeholder="Type here..."
            className='w-full h-10 focus:outline-none' />

          {
            searchData &&
            <div className='absolute min-w-[250px]  max-w-[400px] border top-12  flex flex-col   rounded-md overflow-y-auto shadow-xl p-1  '>

              {showData?.filter((user: UserData) => (user?.isSelected === false))?.map((user: UserData, index: number) => (

                <span className='mx-2 inline-flex items-center justify-beetween text-sm  gap-2 py-[1px] px-1 border-b-2 border-slate-400 bo'  key={index} onClick={() => handleClick(user.id)}>
                  <img loading='lazy' src="./media/user.svg" alt="profile img" className='h-[20px] w-[20px] aspect-square rounded-full object-center bg-zinc-400' />
                  <p className='px-3 py-1'>{user?.name}</p>
                  <p>{user?.mail}</p>
  
                </span>


              ))}
            </div>
          }

        </div>

      </div>

    </section>
  );
}

export default App;
