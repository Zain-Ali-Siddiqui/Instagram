import { useState, useEffect } from "react"
import Likes from "./likes"
import Load from "./loader"
import Profile from "./profile"
import SideBar from "./sideBar"
import { Image } from 'antd';
import 'antd/dist/antd.css';
function Card() {
    const [load, setLoad] = useState(true)

    setInterval(() => {
        setLoad(false)
    }, 1600);
    return (
        <>
            {load === true ?
                <div>
                    <Load />
                </div>
                :
                <div className="main_div">
                    <div>
                        <SideBar />
                    </div>
                    <div className="main_card_div">
                        <div className="div">
                            <div className='div_main'>
                                <div className="inner_div">
                                    <div className="story">
                                        <div className="circle">
                                            <img className="circ story_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPe93T-ar0c0GRTO5Ew9tlpvlI53Go8VFJw&usqp=CAU" alt="" />
                                            <svg viewBox="0 0 100 100" className="svg" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>your story</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle" >
                                            <img className="circ story_img " src={'https://i.pinimg.com/736x/fa/75/d3/fa75d35a0d10fac453109380a62b9b35.jpg'} />
                                            <svg viewBox="0 0 100 100" className="svg1 " xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p className="cr">cristiano</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle">
                                            <img className="circ story_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4lcZH-mGBWAFtZphqzG47i__CUu-oJcpag&usqp=CAU'} />
                                            <svg viewBox="0 0 100 100" className="svg1" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>zubair</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle">
                                            <img className="circ story_img" src={'https://cdn.shopify.com/s/files/1/0553/3774/6621/files/Boy_e13eab58-c299-408e-bca0-2ed709926887.png?v=1660630325'} />
                                            <svg viewBox="0 0 100 100" className="svg1" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>saleem</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle">
                                            <img className="circ story_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9x2CSOCpQBNLYYLl0aC6qfm18iZhAcwmoQ&usqp=CAU'} />
                                            <svg viewBox="0 0 100 100" className="svg1" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>j.</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle">
                                            <img className="circ story_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyeD_HyO7s6zqUxyix_J5vbH0gSemk-qctZw&usqp=CAU'} />
                                            <svg viewBox="0 0 100 100" className="svg1" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>messi</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle">
                                            <img className="circ story_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S7x-uPyVGyBxjUf5jqXgtILiU-6nprBTDw&usqp=CAU'} />
                                            <svg viewBox="0 0 100 100" className="svg1" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>xhang</p>
                                        </div>
                                    </div>
                                    <div className="story stor">
                                        <div className="circle">
                                            <img className="circ story_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU'} />
                                            <svg viewBox="0 0 100 100" className="svg1" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                            <p>advani</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPR-lco4UZXYXd02OU8bfPazlCcBIeZGSfA&usqp=CAU'} />
                                        <p className="profile">cristiano </p>
                                        <p className="follow">• Following</p>
                                        <p className="profile_1">_cristiano</p>
                                        <svg aria-label="More options" className="dot" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image width={'auto'} className="img rr" src={'https://www.nawpic.com/media/2020/cr7-nawpic-14.jpg'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">178,565 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">cristiano ronaldo</p>
                                            <p className="profile_foot">~ CR7 Fan....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 72k comments</p>
                                            <p className="date">OCTOBER 15</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStscMP9_oD0r9oBTZCtVtVAgGrQWX3JyQtwg&usqp=CAU'} />
                                        <p className="profile">roman </p>
                                        <p className="follow">• Following</p>
                                        <p className="profile_1 r ">_roman</p>
                                        <svg aria-label="More options" className="dot t" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image width={'auto'} className="img rr" src={'https://lh3.googleusercontent.com/plGXnJYYey9XVVmwy6goAKXbwSxiMZ8rJbGeB0u376jJe5Bkfrrd8ME5lJQyuY1FiAs'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">78,565 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">roman regins</p>
                                            <p className="profile_foot">~ Roman ❤️❤️....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 32k comments</p>
                                            <p className="date">OCTOBER 15</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPR-lco4UZXYXd02OU8bfPazlCcBIeZGSfA&usqp=CAU'} />
                                        <p className="profile">cristiano</p>
                                        <p className="follow">• Following</p>
                                        <p className="profile_1 ">_cristiano</p>
                                        <svg aria-label="More options" className="dot" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image className="img rrr" src={'https://wallpaper.dog/large/20491968.jpg'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">578,565 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">cristiano ronaldo</p>
                                            <p className="profile_foot">~ CR7 ❤️❤️....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 725k comments</p>
                                            <p className="date">OCTOBER 25</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmc1UtoPfmsiM8zRBuTnVmScaIUcP4U9cXw&usqp=CAU'} />
                                        <p className="profile">babar azam</p>
                                        <p className="follow" >• Follow</p>
                                        <p className="profile_1 b">_babar</p>
                                        <svg aria-label="More options" className="dot" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image width={'auto'} className="img rr" src={'https://i.pinimg.com/736x/ff/e5/08/ffe50838746da3ff2de17a6bae312d8c.jpg'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">278,565 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">babar azam khan </p>
                                            <p className="profile_foot">~ well played ❤️❤️....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 72k comments</p>
                                            <p className="date">OCTOBER 30</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tjixx9VCynuPBrOVrkITy1D5Cvs-sTZhDg&usqp=CAU'} />
                                        <p className="profile">poetry azam </p>
                                        <p className="follow" >• Follow</p>
                                        <p className="profile_1">_babar</p>
                                        <svg aria-label="More options" className="dot" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image width={'auto'} className="img bbb" src={'https://hamariweb.com/poetry/images/Poetry/har-shakhs-keh-raha-hai-105214.png'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">856 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">poetry azam khan P</p>
                                            <p className="profile_foot">~❤️❤️❤️....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 72 comments</p>
                                            <p className="date">OCTOBER 30</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStscMP9_oD0r9oBTZCtVtVAgGrQWX3JyQtwg&usqp=CAU'} />
                                        <p className="profile">roman </p>
                                        <p className="follow">• Following</p>
                                        <p className="profile_1 r ">_roman</p>
                                        <svg aria-label="More options" className="dot" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image width={'auto'} className="img bbbb" src={'https://www.wallpapertip.com/wmimgs/132-1326898_hd-roman-reigns-wallpapers-roman-reigns-wallpaper-hd.jpg'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">78,565 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">roman regins</p>
                                            <p className="profile_foot">~ Roman ❤️❤️....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 32k comments</p>
                                            <p className="date">OCTOBER 15</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_main_div">
                                    <div className="profile_div">
                                        <img className="profile_img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnYoiH6jSVYD7gXkHMxqSn9e4JuQ5KpvllGgxgCiJCxGOzudIJtnhheuMuSavXPnVvIo&usqp=CAU'} />
                                        <p className="profile">sr khan </p>
                                        <p className="follow">• Following</p>
                                        <p className="profile_1 r ">_sharukh</p>
                                        <svg aria-label="More options" className="dot" role="img" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                    <div className="post_div">
                                        <div className="post_inner_div">
                                            <Image width={'auto'} className="img rr" src={'https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2014/09/08/Incoming/Pictures/1261468_Wallpaper2.jpg'} />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <Likes />
                                        <svg aria-label="Comment" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                        <svg aria-label="Share Post" className="like" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                                        <svg aria-label="Save" className="save" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                    <div className="foot">
                                        <div >
                                            <p className="foot_p">78,565 likes</p>
                                        </div>
                                        <div className="profile_footer">
                                            <p className="profile">sharukh khan</p>
                                            <p className="profile_foot">~ sharukh ❤️❤️....</p>
                                        </div>
                                        <div className="footer_div">
                                            <p className="comment">View all 32k comments</p>
                                            <p className="date">OCTOBER 15</p>
                                        </div>
                                        <div className="foot_comment">
                                            <svg aria-label="Emoji" className="emoji" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                            <div> <input type='text' className='add' placeholder="Add a comment" /></div>
                                            <p className="add_post">Post</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="side_div">
                                <Profile />
                            </div>
                        </div>
                    </div>
                    <div className="foot_fixed">
                        <div>
                            <svg aria-label="Home" className="icon" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
                            <svg aria-label="Search" className="icon i" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                            <svg aria-label="New post" className="icon i" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24" ><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                            <svg aria-label="Notifications" className="icon i" color="#262626" fill="#262626" role="img" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                            <img className="icon i j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvAUH2ClVMdv3p6CB6oJtnEhqNhm7unb0Fg&usqp=CAU" alt="profile" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Card
