import React from 'react'
export interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string;
    location: string;
    email: string | null;
    hireable: boolean | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}
type props = {
    user: GitHubUser
}

export default function User({ user }: props) {
    
    const isoDate = user.created_at;
    const date = new Date(isoDate);

    const formatted = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    
  return (
    <div className='userContainer'>
          <img src={user.avatar_url} alt="" />
          <div className='info userName'>
              <a href={user.html_url} target='_blank'>{user.login}</a>   user joined on {formatted}
          </div>
          <div className='info'>
           pobluc repos :  {user.public_repos}
          </div>
          <div className='info'>
            followers : {user.followers}
          </div>
          <div className='info'>
            following :  {user.following}
          </div>
    </div>
  )
}
