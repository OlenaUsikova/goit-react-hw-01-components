import React from 'react';
import user from '../data/user.json';
import { Profile } from './user/Profile';
import friends from '../data/friends.json';
import { FriendList } from './friendList/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transactions/TransactionHistory';
import data from '../data/data.json';
import { Statistics } from './statistics/Statistics';

export const App = props => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        margin: '20px auto',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
