import { LayoutPage } from "@shared/components/LayoutPage"
import { Tabs } from "@shared/components/Tabs"
import { useState } from "react"

export const AuthPage = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <LayoutPage
        headerTheme="dark"
        >
            <Tabs text="Регистрация" isActive={isActive} onClick={() => setIsActive((prev) => !prev)}/>
        </LayoutPage>
    )
}