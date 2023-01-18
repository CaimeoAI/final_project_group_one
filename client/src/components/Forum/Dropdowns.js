import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CiGrid42 } from "react-icons/ci";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ topic, setTopic }) {
  const fileds = ["WebDev", "DigitalMarketing", "AWS", "Python"];

  const getValue = (text) => {
    setTopic(text);
  };

  return (
    <Menu as="div" className="relative inline-block mr-[3px]">
      <div className="w-[295px] md:w-[220px] ">
        <Menu.Button className="w-full rounded border flex flex-row items-center justify-between border-hover-primary bg-secondary px-2 p-2 text-sm md:text-md font-medium text-grayed-out shadow-sm hover:bg-slate-300 hover:text-slate-800 focus:outline-none  focus:ring-offset-2 focus:ring-offset-grayed-out">
          <div className="w-[80%] flex items-center">
          <CiGrid42 className="h-6 w-6 mr-3" aria-hidden="true" />
          {topic}
          </div>
          <div className=" w-[20%] flex justify-end ">
          <ChevronDownIcon
            className=" h-5 w-5"
            aria-hidden="true"
          />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="text-slate-700 absolute right-0 z-10 mt-2 min-w-full   md:w-[220px] origin-top-right rounded-md bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <section className="py-1">
            {fileds.map((field, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <option
                    value={field}
                    onClick={(e) => getValue(e.target.value)}
                    className={classNames(
                      active ? "bg-[#94a3b8] text-slate-800 cursor-pointer" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {`#${field}`}
                  </option>
                )}
              </Menu.Item>
            ))}
          </section>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
