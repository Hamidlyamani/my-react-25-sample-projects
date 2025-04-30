
import MenuItem from "./menuitem"
import { menu } from "./dropdwon"

export default function Menu({ data }: { data: menu[] }) {
   
  return (
      <>
          {data.map((item) => {
              return (
                  <>
                      <MenuItem dataMenu={item } />
                  </>
              )
          })}
       </>
  )
}
