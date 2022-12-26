import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CiGrid42 } from "react-icons/ci";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ topic, setTopic }) {
  const fileds = ["webdev", "AWS", "onlinemarketing", "python"];

  const getValue = (text) => {
    setTopic(text);
  };

  return (
    <Menu as="div" className="relative inline-block ">
      <div className="mb-2 w-62 md:w-64">
        <Menu.Button className="inline-flex w-full justify-start  rounded border border-slate-800 bg-slate-600 px-4 py-3 text-md font-medium text-zinc-100 shadow-sm hover:bg-slate-200 hover:text-zinc-800 focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-300">
          <CiGrid42 className="-ml-2 h-5 w-5 mr-3" aria-hidden="true" />
          {topic}
          <ChevronDownIcon
            className=" -mr-2 ml-5 md:-mr-12 md:ml-24 h-5 w-5"
            aria-hidden="true"
          />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <section className="py-1">
            {fileds.map((field, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <option
                    value={field}
                    onClick={(e) => getValue(e.target.value)}
                    className={classNames(
                      active ? "bg-slate-300 text-gray-900" : "text-gray-700",
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
