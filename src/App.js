
// // // import React, { useRef, useState } from 'react';
// // // import './App.css';

// // // import { initializeApp } from 'firebase/app';
// // // import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// // // import { getFirestore, collection, orderBy, query, addDoc, serverTimestamp, limit, where, getDocs } from 'firebase/firestore';  // Importing necessary Firestore methods
// // // import { getAnalytics } from 'firebase/analytics';

// // // import { useAuthState } from 'react-firebase-hooks/auth';
// // // import { useCollectionData } from 'react-firebase-hooks/firestore';

// // // // Firebase config
// // // const firebaseConfig = {
// // //   apiKey: "AIzaSyDBChuXvs30KtWwbV02B-sgxzV8WQWvjLI",
// // //   authDomain: "superchat-62a49.firebaseapp.com",
// // //   projectId: "superchat-62a49",
// // //   storageBucket: "superchat-62a49.firebasestorage.app",
// // //   messagingSenderId: "139137719122",
// // //   appId: "1:139137719122:web:6e378331d3fd747bcbb88b",
// // //   measurementId: "G-GZ21DL5PMG"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // // const auth = getAuth(app);
// // // const firestore = getFirestore(app);
// // // const analytics = getAnalytics(app);

// // // function App() {
// // //   const [user] = useAuthState(auth);

// // //   return (
// // //     <div className="App">
// // //       <header>
// // //         <h1>⚛️🔥💬</h1>
// // //         <SignOut />
// // //       </header>

// // //       <section>
// // //         {user ? <ChatRoom /> : <SignIn />}
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // function SignIn() {
// // //   const signInWithGoogle = () => {
// // //     const provider = new GoogleAuthProvider();
// // //     signInWithPopup(auth, provider);
// // //   };

// // //   return (
// // //     <>
// // //       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
// // //       <p>Do not violate the community guidelines or you will be banned for life!</p>
// // //     </>
// // //   );
// // // }

// // // function SignOut() {
// // //   return auth.currentUser && (
// // //     <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
// // //   );
// // // }

// // // function ChatRoom() {
// // //   const dummy = useRef();
// // //   const messagesRef = collection(firestore, 'messages');
// // //   const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));  // Added 'desc' for descending order

// // //   const [messages] = useCollectionData(q, { idField: 'id' });

// // //   const [formValue, setFormValue] = useState('');

// // //   const sendMessage = async (e) => {
// // //     e.preventDefault();

// // //     const { uid, photoURL } = auth.currentUser;

// // //     // Query to check if the user is banned
// // //     const bannedRef = collection(firestore, 'banned');
// // //     const q = query(bannedRef, where('uid', '==', uid));  // Correct query to check if the user is banned

// // //     const bannedSnapshot = await getDocs(q);  // Correct method to get the query result
// // //     if (!bannedSnapshot.empty) {
// // //       alert('You are banned from sending messages.');
// // //       return;
// // //     }

// // //     // Add message to Firestore if not banned
// // //     await addDoc(messagesRef, {
// // //       text: formValue,
// // //       createdAt: serverTimestamp(),
// // //       uid,
// // //       photoURL
// // //     });

// // //     setFormValue('');
// // //     dummy.current.scrollIntoView({ behavior: 'smooth' });
// // //   };

// // //   return (
// // //     <>
// // //       <main>
// // //         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
// // //         <span ref={dummy}></span>
// // //       </main>

// // //       <form onSubmit={sendMessage}>
// // //         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
// // //         <button type="submit" disabled={!formValue}>🕊️</button>
// // //       </form>
// // //     </>
// // //   );
// // // }

// // // function ChatMessage(props) {
// // //   const { text, uid, photoURL } = props.message;

// // //   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

// // //   return (
// // //     <div className={`message ${messageClass}`}>
// // //       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User Avatar" />
// // //       <p>{text}</p>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import React, { useRef, useState } from 'react';
// // import './App.css';

// // import { initializeApp } from 'firebase/app';
// // import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// // import { getFirestore, collection, orderBy, query, addDoc, serverTimestamp, limit, where, getDocs } from 'firebase/firestore';  // Importing necessary Firestore methods
// // import { getAnalytics } from 'firebase/analytics';

// // import { useAuthState } from 'react-firebase-hooks/auth';
// // import { useCollectionData } from 'react-firebase-hooks/firestore';

// // // Firebase config
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDBChuXvs30KtWwbV02B-sgxzV8WQWvjLI",
// //   authDomain: "superchat-62a49.firebaseapp.com",
// //   projectId: "superchat-62a49",
// //   storageBucket: "superchat-62a49.firebasestorage.app",
// //   messagingSenderId: "139137719122",
// //   appId: "1:139137719122:web:6e378331d3fd747bcbb88b",
// //   measurementId: "G-GZ21DL5PMG"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// // const firestore = getFirestore(app);
// // const analytics = getAnalytics(app);

// // function App() {
// //   const [user] = useAuthState(auth);

// //   return (
// //     <div className="App">
// //       <header>
// //         <h1>⚛️🔥💬</h1>
// //         <SignOut />
// //       </header>

// //       <section>
// //         {user ? <ChatRoom /> : <SignIn />}
// //       </section>
// //     </div>
// //   );
// // }

// // function SignIn() {
// //   const signInWithGoogle = () => {
// //     const provider = new GoogleAuthProvider();
// //     signInWithPopup(auth, provider);
// //   };

// //   return (
// //     <>
// //       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
// //       <p>Do not violate the community guidelines or you will be banned for life!</p>
// //     </>
// //   );
// // }

// // function SignOut() {
// //   return auth.currentUser && (
// //     <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
// //   );
// // }

// // function ChatRoom() {
// //   const dummy = useRef();
// //   const messagesRef = collection(firestore, 'messages');
// //   const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));  // Added 'desc' for descending order

// //   const [messages] = useCollectionData(q, { idField: 'id' });

// //   const [formValue, setFormValue] = useState('');

// //   const sendMessage = async (e) => {
// //     e.preventDefault();

// //     const { uid, photoURL } = auth.currentUser;

// //     // Query to check if the user is banned
// //     const bannedRef = collection(firestore, 'banned');
// //     const q = query(bannedRef, where('uid', '==', uid));  // Correct query to check if the user is banned

// //     const bannedSnapshot = await getDocs(q);  // Correct method to get the query result
// //     if (!bannedSnapshot.empty) {
// //       alert('You are banned from sending messages.');
// //       return;
// //     }

// //     // Add message to Firestore if not banned
// //     await addDoc(messagesRef, {
// //       text: formValue,
// //       createdAt: serverTimestamp(),
// //       uid,
// //       photoURL
// //     });

// //     setFormValue('');
// //     dummy.current.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <>
// //       <main>
// //         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
// //         <span ref={dummy}></span>
// //       </main>

// //       <form onSubmit={sendMessage}>
// //         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
// //         <button type="submit" disabled={!formValue}>🕊️</button>
// //       </form>
// //     </>
// //   );
// // }

// // function ChatMessage(props) {
// //   const { text, uid, photoURL } = props.message;

// //   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

// //   return (
// //     <div className={`message ${messageClass}`}>
// //       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User Avatar" />
// //       <p>{text}</p>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useRef, useState } from 'react';
// import './App.css';

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import { getFirestore, collection, orderBy, query, addDoc, serverTimestamp, limit, where, getDocs } from 'firebase/firestore'; 
// import { getAnalytics } from 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDBChuXvs30KtWwbV02B-sgxzV8WQWvjLI",
//   authDomain: "superchat-62a49.firebaseapp.com",
//   projectId: "superchat-62a49",
//   storageBucket: "superchat-62a49.firebasestorage.app",
//   messagingSenderId: "139137719122",
//   appId: "1:139137719122:web:6e378331d3fd747bcbb88b",
//   measurementId: "G-GZ21DL5PMG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <header>
//         <h1>⚛️🔥💬</h1>
//         <SignOut />
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>
//     </div>
//   );
// }

// function SignIn() {
//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);

//     // Log the result of the sign-in to check if photoURL is available
//     console.log(result.user);  // Log user details to check photoURL
//   };

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   );
// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
//   );
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = collection(firestore, 'messages');
//   const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));

//   const [messages] = useCollectionData(q, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     // Query to check if the user is banned
//     const bannedRef = collection(firestore, 'banned');
//     const bannedQuery = query(bannedRef, where('uid', '==', uid));

//     const bannedSnapshot = await getDocs(bannedQuery);
//     if (!bannedSnapshot.empty) {
//       alert('You are banned from sending messages.');
//       return;
//     }

//     // Add message to Firestore
//     await addDoc(messagesRef, {
//       text: formValue,
//       createdAt: serverTimestamp(),
//       uid,
//       photoURL
//     });

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <main>
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//         <span ref={dummy}></span>
//       </main>

//       <form onSubmit={sendMessage}>
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
//         <button type="submit" disabled={!formValue}>🕊️</button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'} alt="User Avatar" />
//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;


import React, { useRef, useState, useEffect } from 'react';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, orderBy, query, addDoc, serverTimestamp, limit, where, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { getAnalytics } from 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDBChuXvs30KtWwbV02B-sgxzV8WQWvjLI",
  authDomain: "superchat-62a49.firebaseapp.com",
  projectId: "superchat-62a49",
  storageBucket: "superchat-62a49.firebasestorage.app",
  messagingSenderId: "139137719122",
  appId: "1:139137719122:web:6e378331d3fd747bcbb88b",
  measurementId: "G-GZ21DL5PMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // Log the result of the sign-in to check if photoURL is available
    console.log(result.user);  // Log user details to check photoURL
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  // Scroll to bottom when new messages are added
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    // Query to check if the user is banned
    const bannedRef = collection(firestore, 'banned');
    const bannedQuery = query(bannedRef, where('uid', '==', uid));

    const bannedSnapshot = await getDocs(bannedQuery);
    if (!bannedSnapshot.empty) {
      alert('You are banned from sending messages.');
      return;
    }

    // Add message to Firestore
    const newMessage = await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    // Set a timer to delete the message after 30 seconds
    setTimeout(async () => {
      await deleteDoc(doc(firestore, 'messages', newMessage.id));
    }, 500000); // 30 seconds

    setFormValue('');
  };

  return (
    <>
      <main className="chat-main">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'} alt="User Avatar" />
      <p>{text}</p>
    </div>
  );
}

export default App;
