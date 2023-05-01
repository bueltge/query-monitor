import {
	Caller,
	Notice,
	QMComponent,
	Tabular,
	iPanelProps,
} from 'qmi';
import {
	DataTypes,
} from 'qmi/data-types';
import * as React from 'react';

import {
	__,
	_x,
} from '@wordpress/i18n';

interface iTransientsProps extends iPanelProps {
	data: DataTypes['Transients'];
}

class Transients extends React.Component<iTransientsProps, Record<string, unknown>> {

	render() {
		const { data } = this.props;

		if ( ! data.trans?.length ) {
			return (
				<Notice id={ this.props.id }>
					<p>
						{ __( 'No transients set.', 'query-monitor' ) }
					</p>
				</Notice>
			);
		}

		return (
			<Tabular id={ this.props.id }>
				<thead>
					<tr>
						<th scope="col">
							{ __( 'Updated Transient', 'query-monitor' ) }
						</th>
						{ data.has_type && (
							<th scope="col">
								{ _x( 'Type', 'transient type', 'query-monitor' ) }
							</th>
						) }
						<th scope="col">
							{ __( 'Expiration', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ _x( 'Size', 'size of transient value', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Caller', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Component', 'query-monitor' ) }
						</th>
					</tr>
				</thead>
				<tbody>
					{ data.trans.map( transient => (
						<tr key={ transient.name }>
							<td className="qm-ltr qm-nowrap">
								<code>
									{ transient.name }
								</code>
							</td>
							{ data.has_type && (
								<td className="qm-ltr qm-nowrap">
									{ transient.type }
								</td>
							) }

							{ transient.expiration ? (
								<td className="qm-nowrap">
									{ transient.expiration }
									<span className="qm-info">
										(~{ transient.exp_diff })
									</span>
								</td>
							) : (
								<td className="qm-nowrap">
									<em>
										{ __( 'none', 'query-monitor' ) }
									</em>
								</td>
							) }

							<td className="qm-nowrap">
								~{ transient.size_formatted }
							</td>
							<Caller
								toggleLabel={ __( 'View call stack', 'query-monitor' ) }
								trace={ transient.filtered_trace }
							/>
							<QMComponent component={ transient.component } />
						</tr>
					) ) }
				</tbody>
			</Tabular>
		);
	}

}

export default Transients;
