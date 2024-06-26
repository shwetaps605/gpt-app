import ChatComponent from "../../../components/ChatComponent";
import { dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

const ChatPage = () => {
    const queryClient = new QueryClient()
    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
           <ChatComponent/>
        </HydrationBoundary>
    )
}

export default ChatPage