import React, {Fragment} from 'react';
import './List.css';

export const List = (props) => (
	<section className="list">
		<header>
			<h4>{props.title}</h4>
		</header>
		<table>
			<tbody>
				{props.data.map(item => {
					return (
						<Fragment>
							<tr>
								<td>{item.text}</td>
								<td rowSpan="2" className="button-data-cell">
									<button onClick={item.onClick}>{item.buttonText}</button>
									{item.buttonSubtext && <div>{item.buttonSubtext}</div>}
								</td>
							</tr>
							<tr>
								<td className="subtext-data-cell">{item.subtext}</td>
							</tr>
						</Fragment>
					);
				})}
			</tbody>
		</table>
	</section>
);