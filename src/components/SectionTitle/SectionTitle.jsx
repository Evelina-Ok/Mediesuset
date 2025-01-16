import style from "./SectionTitle.module.scss"

// Vi bruger props for at genbruge dem
// Props are always an object

export function SectionTitle ({title}) {
    return (
        <div>
            <h3>{title}</h3>
        </div>

    )
}