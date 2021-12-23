import React from 'react';
import * as MaterialIcon from '@mui/icons-material';
import './topbar.css'

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Reactsocial</span>
			</div>

			<div className="topbarCenter">
				<div className="searchbar">
					<MaterialIcon.Search className="searchIcon" />
					<input type="text" placeholder='Search for friend, post or video' className="searchInput" />
				</div>
			</div>

			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>

				<div className="topbarIcons">
					<div className="topbarIconItem">
						<MaterialIcon.Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<MaterialIcon.Chat />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconItem">
						<MaterialIcon.Notifications />
						<span className="topbarIconBadge">3</span>
					</div>
				</div>

				<img src="/assets/post/1.jpeg" alt="image" className="topbarImg" />
			</div>
		</div>
	)
}

export default Topbar;