import React, { useState } from 'react';
import * as MaterialIcon from '@mui/icons-material';
import { Users } from '../../dummyData';
import './post.css'

const Post = ({ post }) => {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		if (isLiked) {
			setLike(like - 1);
			setIsLiked(false);
		}
		else {
			setLike(like + 1);
			setIsLiked(true);
		}
	}

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img src={Users.filter(user => user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
						<span className="postUsername">{Users.filter(user => user.id === post.userId)[0].username}</span>
						<span className="postDate">{post.date}</span>
					</div>

					<div className="postTopRight">
						<MaterialIcon.MoreVert />
					</div>
				</div>

				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img src={post.photo} alt="" className="postImg" />
				</div>

				<div className="postBottom">
					<div className="postBottomLeft">
						<img src="/assets/like.png" alt="" className="postLikeIcon" onClick={() => likeHandler()} />
						<img src="/assets/heart.png" alt="" className="postLikeIcon" onClick={() => likeHandler()} />
						<span className="postLikeCounter">{like} people like it</span>
					</div>

					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post;