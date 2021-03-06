import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import { Posts } from '../../dummyData';
import './feed.css'

const Feed = () => {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{Posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>
		</div>
	)
}

export default Feed;