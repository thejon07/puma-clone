import { useState,useCallback } from "react";
export default function useSearchbar() {
    const [showMenu, setShowMenu] = useState(false)

    const toggle = useCallback(() => {
      setShowMenu((prev) => !prev)
    },[])
    return {
        showMenu,
        toggle,
    }
}
