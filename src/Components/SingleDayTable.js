import "./SingleDayTable.css";
import Waiter from "./Waiter";
import React from "react";
import callLogo from "../callicon.png";

class SingleDayTable extends React.Component {
  chiamata(h) {
    if (h === "12Chiamata" || h === "19Chiamata") {
      return <img src={callLogo} width="40" height="40" alt="Chiamata"></img>;
    }
    return h;
  }

  render() {
    if (this.props.sprints.length === 0) return null;

    return (
      <div className="tableContainer" id={this.props.day}>
        <table>
          <tr>
            <th colspan="2" id="day">
              <p>
                {this.props.day} {this.props.date}
              </p>
            </th>
          </tr>

          {this.props.sprints.map((sprint) => {
            if (sprint.hour === "18:00") {
              return (
                <tr className="sprint18">
                  <th>{this.chiamata(sprint.hour)}</th>
                  <td>
                    {sprint.waiters.map((waiter) => (
                      <Waiter waiterName={waiter}></Waiter>
                    ))}
                  </td>
                </tr>
              );
            } else
              return (
                <tr>
                  <th>{this.chiamata(sprint.hour)}</th>
                  <td>
                    {sprint.waiters.map((waiter) => (
                      <Waiter waiterName={waiter}></Waiter>
                    ))}
                  </td>
                </tr>
              );
          })}
        </table>
      </div>
    );
  }
}

export default SingleDayTable;
