import React, { useEffect, useRef, useState } from "react";

export default function CustomSelect({ value, onChange, categories = [], placeholder = "All categories" }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleDoc(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("click", handleDoc);
        return () => document.removeEventListener("click", handleDoc);
    }, []);

    const handleSelect = (val) => {
        onChange(val);
        setOpen(false);
    };

    return (
        <div className="custom-select" ref={ref}>
            <button
                type="button"
                className="custom-select__toggle"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
            >
                <span className="custom-select__value">{value || placeholder}</span>
                <svg className="custom-select__caret" width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7 10l5 5 5-5" fill="none" stroke="#E7F7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <ul className="custom-select__list" role="listbox" tabIndex={-1}>
                    <li
                        className={`custom-select__item ${value === "" ? "selected" : ""}`}
                        onClick={() => handleSelect("")}
                        role="option"
                        aria-selected={value === ""}
                    >
                        All categories
                    </li>
                    {categories.map((c) => (
                        <li
                            key={c}
                            className={`custom-select__item ${value === c ? "selected" : ""}`}
                            onClick={() => handleSelect(c)}
                            role="option"
                            aria-selected={value === c}
                        >
                            {c}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
