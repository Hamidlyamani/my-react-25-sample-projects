import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import { menu } from "./dropdwon";
import Menu from "./Menu";
import { useState } from "react";

type Props = {
    dataMenu: menu;
};

type element = {
    [title: string]: boolean;
}
export default function MenuItem({ dataMenu }: Props) {
    const [active, setActive] = useState <element>({});

    const hendelActive = (e:string) => {
        setActive({ ...active,
            [e]: !active[e]
         })
    }

  return (
      <div>
          <div className="content"  onClick={() => { hendelActive(dataMenu.title) }}>{dataMenu.title} <div><FaPlus /><FaWindowMinimize /></div></div>
          {dataMenu.children && dataMenu.children.length > 0 && active[dataMenu.title] ? 
              <div className="children">
                  <Menu data={dataMenu.children} />
              </div>
              : null}
    </div>
  )
}
