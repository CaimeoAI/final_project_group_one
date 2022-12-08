import  Input from './Input';
import ClickOutHandler from 'react-clickout-handler';
import Textarea from './Texterea';
import Button from './Button';

const CreatePostModal = () => {
    // const [showPostFormModal,setShowPostFormModal] = useState(false);
    const visibleClass = 'block';

  return (
  <div
      className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+visibleClass}  style={{backgroundColor:'rgba(0,0,0,.5)'}}>
        <ClickOutHandler onClickOut={() => {}  }>
            <div className="
                border
              border-zinc-900 
                w-3/4 
                md:w-2/4
              bg-zinc-800 
                p-5 
                text-sm 
                self-center 
                mx-auto 
                rounded-md">
              <h1 className="text-2xl mb-5 text-zinc-500">Create a post</h1>
                  <Input 
                    className={'w-full mb-2'}
                    placeholder={"Title"} />
                  <Textarea 
                    className={'w-full mb-4'} 
                    placeholder={'Post text (you can use markdown)'} />
              <div className="text-right">
                  <Button className={"px-5 py-2 mr-3"}>Cancel</Button>
                  <Button className={"px-5 py-2"}>POST</Button>
              </div>
            </div>
        </ClickOutHandler>
  </div>
  )
}

export default CreatePostModal