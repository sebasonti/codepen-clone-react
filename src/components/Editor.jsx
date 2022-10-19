import React, { useState } from "react";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import CodeMirror from "@uiw/react-codemirror";
import { darcula } from "@uiw/codemirror-themes-all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
    const { language, displayName, value, onChange } = props;
    const [open, setOpen] = useState(true);

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <FontAwesomeIcon
                        icon={open ? faCompressAlt : faExpandAlt}
                    />
                </button>
            </div>
            <CodeMirror
                value={value}
                onChange={onChange}
                theme={darcula}
                className="editor-code"
                extensions={[loadLanguage(language)]}
            />
        </div>
    );
}
