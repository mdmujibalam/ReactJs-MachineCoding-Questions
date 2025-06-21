import React, { useMemo } from "react";
import { CheckboxesData } from "../constant";

const CheckBox = ({ data, checked, setChecked, parentMap }) => {
    
  const handleCheck = (e, node) => {
    setChecked((prev) => {
      let newChecked = { ...prev };
      newChecked = { ...prev, [node.id]: e.target.checked };

      //Update all descendants/childrn
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newChecked[child.id] = e.target.checked;
          child.children && updateChildren(child);
        });
      };

      // Update all ancestors/parents
      const updateParents = (node) => {
        const parentNode = parentMap.get(node.id);
        if (!parentNode) return;
        const allChildrenChecked = parentNode.children.every(
          (child) => newChecked[child.id]
        );
        newChecked[parentNode.id] = allChildrenChecked;
        updateParents(parentNode);
      };

      updateChildren(node);
      updateParents(node);
      return newChecked;
    });
  };

  return (
    <div>
      {data.map((node, index) => {
        return (
          <div className="checkbox-item" key={node.id}>
            <input
              type="checkbox"
              name={node.label}
              id={node.id}
              checked={checked[node?.id] || false}
              onChange={(e) => handleCheck(e, node)}
            />
            <span> {node.label}</span>

            {node.children && (
              <CheckBox
                data={node.children}
                checked={checked}
                setChecked={setChecked}
                parentMap={parentMap}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
