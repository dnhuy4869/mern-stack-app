import React from 'react';
import * as MaterialIcon from '@mui/icons-material';
import { Users } from '../../dummyData';
import './sidebar.css'
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<MaterialIcon.RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.Chat className="sidebarIcon" />
						<span className="sidebarListItemText">Chats</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.Group className="sidebarIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.Bookmark className="sidebarIcon" />
						<span className="sidebarListItemText">Bookmarks</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.WorkOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.Event className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li>
					<li className="sidebarListItem">
						<MaterialIcon.School className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li>
				</ul>

				<button className="sidebarButton">Show More</button>

				<hr className="sidebarHr" />

				<ul className="sidebarFriendList">
					{Users.map((user, index) => (
						<CloseFriend key={index} user={user} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Sidebar;