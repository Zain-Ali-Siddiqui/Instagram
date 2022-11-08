import React from "react";
import yash from './accets/yash.jpg'
import garuda from './accets/garuda.jpg'
function Profile() {
    return (
        <>
            <div>
                <div className="main_profile_div" >
                    <img className="story_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvAUH2ClVMdv3p6CB6oJtnEhqNhm7unb0Fg&usqp=CAU" alt="profile" />
                    <p className="p">zainalisidd786</p>
                    <p className="p1">Zain Ali</p>
                </div>
                <div >
                    <p className="suggestion">Suggestions For You</p>
                </div>
                <div>
                    <div className="prof">
                        <img className="profi" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&usqp=CAU'} />
                        <p className="profile user">johnuser_________1</p>
                        <p className="follow follo">Follow</p>
                    </div>
                    <p className="following">Followed by siddmemer</p>
                </div>
                <div>
                    <div className="prof">
                        <img className="profi" src={yash} />
                        <p className="profile user ">rockingstar__yash</p>
                        <p className="follow follo rock">Follow</p>
                    </div>
                    <p className="following">Followed by siddmemer</p>
                </div>
                <div>
                    <div className="prof">
                        <img className="profi" src={garuda} />
                        <p className="profile user">garuda________503</p>
                        <p className="follow follo">Follow</p>
                    </div>
                    <p className="following">Followed by siddmemer</p>
                </div>
                <div>
                    <div className="prof">
                        <img className="profi" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&usqp=CAU'} />
                        <p className="profile user">adheera_______90</p>
                        <p className="follow follo fol">Follow</p>
                    </div>
                    <p className="following">Followed by siddmemer</p>
                </div>
            </div>
            <div>
                <p className="foots">About - Help - Press - Api - Jobs - Privacy - Terms - Locatons - Languages </p>
                 <p className="copy">© 2022 Instagram from Meta</p>
            </div>
        </>
    )
}
export default Profile