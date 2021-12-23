import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css'

const Profile = () => {
	return (
		<>
			<Topbar />

			<div className="profile">
				<Sidebar />

				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
							<img src="/assets/person/7.jpeg" alt="" className="profileUserImg" />
						</div>

						<div className="profileInfo">
							<h4 className="profileInfoName">Safak Kocaoglu</h4>
							<span className="profileInfoDesc">It's my profile, follow for more</span>
						</div>
					</div>

					<div className="profileRightBotton">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile;