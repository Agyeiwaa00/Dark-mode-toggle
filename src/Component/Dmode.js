import {useState,useEffect} from "react"

 function DarkMode() {

    const [darkMode, setDarkMode]=useState('white')
    const click = darkMode=> {setDarkMode(darkMode)}
    useEffect(()=>{document.body.style.backgroundColor=darkMode},[darkMode])
    return (
        <div ClassName={`page ${darkMode && 'dark-mode'}`}>
            <div className='text-center pt-80' >
            <button className={`dark-mode-button font-bold bg-gray-900 text-white rounded-full m-5 py-1 px-2 w-17`} onClick={()=>click('black')}>Dark Mode</button>
            <button className={`light-mode-button font-bold bg-white text-black rounded-full capitalize  m-5 py-1 px-2 w-17 ${darkMode === "black" ? `text-white`:`text-black`}`} onClick={()=>click('white')}>Light mode</button>
            </div>  
        </div>
    )
}
export default DarkMode;
