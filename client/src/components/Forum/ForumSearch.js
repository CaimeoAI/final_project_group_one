import SearchIcon from "@mui/icons-material/Search";
import FilterBtn from "./FilterBtn";
import { useForum } from "../../context/ForumProvider";

const ForumSearch = () => {
  
    const {setSearchInput} = useForum();
        
    const inputHandler = (e) => {
            let lowerCase = e.target.value.toLowerCase();
            setSearchInput(lowerCase);
        };

  return (
      <div className="flex flex-col md:flex-row mt-5">
            <div
              style={{ backgroundColor: " rgb(33,45,66)" }} 
              className="
                        flex
                        justify-between
                        items-center
                        rounded-full
                        mb-4
                        md:mb-0
                        py-1.5
                        w-full
                        pl-4
                        lg:pl-6
                        md:w-[70%]
                        lg:w-[50%]
                        ">
                <input
                  onChange={inputHandler}
                  className="bg-transparent  outline-none w-[90%] text-text-primary"
                  type="text"
                  placeholder="Search..."/>

                 <SearchIcon className="mr-4 lg:mr-6 text-slate-300 cursor-pointer hover:text-slate-400" />
             </div>
        <FilterBtn />
      </div>
  );
};

export default ForumSearch;
