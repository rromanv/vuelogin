import { ref } from 'vue'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from 'firebase/firestore'

import { db } from './useFirebase'
import useAuth from './useAuth'

const messages = ref([])
const { user } = useAuth()

const useChat = () => {
  const chatCollection = collection(db, 'chat')

  const chatQuery = query(chatCollection, orderBy('createdAt', 'desc'))

  const unsubscribe = onSnapshot(chatQuery, querySnapshot => {
    messages.value = []
    querySnapshot.forEach(doc => {
      messages.value.push({ id: doc.id, ...doc.data() })
    })
  })

  const addMessage = async message => {
    await addDoc(collection(db, 'chat'), {
      text: message,
      author: user.value,
      createdAt: new Date(),
    })
  }

  return { messages, unsubscribe, addMessage }
}

export default useChat
