import {react, useState} from 'react'
import Navbar from "../Components/Navbar"
import './Home.css'
import Popup from 'reactjs-popup';

function Home() {
    const[list, setList] = useState([]);
    const[listName, setListName] = useState('');
    const[items, setItems] = useState([]);
    const[itemName, setItemName] = useState('');

  return (
    <div>
        <Navbar/>
        
        <div className='container'>
            {list.map((l) => {
                return (
                    <div className='my-tasks'>
                        <div className='task-heading'>
                            <p>{l}</p>
                            <img src={require('../more.png')} style={{height: "23px", width: "25px"}}/>
                        </div>
                        <div className='add-task'>
                            <Popup trigger=
                                {<img src={require('../addList.png')} style={{height: "25px", width: "25px"}}/>}
                                modal nested>
                                {
                                    close => (
                                        <div className='modal'>
                                            <div className='popup-icons'>
                                                <img src={require('../copy-writing.png')} onClick={() => {
                                                    setItems([...items, itemName]);
                                                    setItemName('');
                                                    close();
                                                }} />
                                                <img src={require('../close.png')} onClick={() => close()}/>
                                            </div>
                                            <p>Campus build</p>
                                            <textarea rows={6} cols={50} onChange={(e) => setItemName(e.target.value)}></textarea>
                                            <p>Add Date</p>
                                            <p>Move to another list</p>
                                        </div>
                                    )
                                }
                            </Popup>
                            <p>Add a task</p>
                        </div>
                        {items.map((i) => {
                            return (
                            <div className='task'>
                                <div style={{display: 'inline-block', height: '25px', width: '25px', border: '1px solid blue', borderRadius: '50%'}}></div>
                                <p>{i.substr(0, 100)}</p>
                            </div>
            )})}
                    </div>
                )
            })}

            <div className='addList-img'>
            <Popup trigger=
                {<img src={require('../addList.png')} />}
                modal nested>
                {
                    close => (
                        <div className='new-list'>
                            <input type='text' onChange={(e) => setListName(e.target.value)} placeholder="New List" style={{height: "2rem",width: "24vw", border: "none", outline: "none", fontSize: "20px"}}/>
                            <img src={require('../addList.png')} style={{width: "30px", height: "30px"}} onClick={() => {
                                setList([...list, listName]);
                                setListName('');
                                close();
                            }}/>
                        </div>
                    )
                }
            </Popup>
                    
            </div>
        </div>
    </div>
  )
}

export default Home