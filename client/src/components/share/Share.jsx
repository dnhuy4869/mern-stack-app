import React from 'react';
import * as MaterialIcon from '@mui/icons-material';
import './share.css'

const Share = () => {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img src="/assets/person/2.jpeg" alt="" className="shareProfileImg" />
					<input type="text" className="shareInput" placeholder="What is in your mine Huy" />
				</div>

				<hr className="shareHr" />

				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<MaterialIcon.PermMedia htmlColor="tomato" className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<MaterialIcon.Label htmlColor="blue" className="shareIcon" />
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<MaterialIcon.Room htmlColor="green" className="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<MaterialIcon.EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
							<span className="shareOptionText">Feelings</span>
						</div>
					</div>

					<button className="shareButton">Share</button>
				</div>
			</div>
		</div>
	)
}

export default Share;