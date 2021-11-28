import { ref } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

import { db } from './useFirebase'
import useAuth from './useAuth'

const { user } = useAuth()

const messages = ref([])

const useChat = () => {
  const chatCollection = collection(db, 'chat')

  const chatQuery = query(chatCollection, orderBy('createdAt', 'desc'))

  const unsubscribe = onSnapshot(chatQuery, querySnapshot => {
    messages.value = []
    querySnapshot.forEach(doc => {
      messages.value.push({ id: doc.id, ...doc.data() })
    })
  })

  return { messages, unsubscribe }
}

export default useChat
