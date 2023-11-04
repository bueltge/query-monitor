import {
	Caller,
	EmptyPanel,
	Component,
	TabularPanel,
	PanelProps,
} from 'qmi';
import {
	DataTypes,
} from 'qmi/data-types';
import * as React from 'react';

import {
	__,
	_x,
} from '@wordpress/i18n';

export default ( { data }: PanelProps<DataTypes['Transients']> ) => {
	if ( ! data.trans?.length ) {
		return (
			<EmptyPanel>
				<p>
					{ __( 'No transients set.', 'query-monitor' ) }
				</p>
			</EmptyPanel>
		);
	}

	return <TabularPanel
		title={ __( 'Transients', 'query-monitor' ) }
		cols={ {
			name: {
				heading: __( 'Updated Transient', 'query-monitor' ),
				render: ( row ) => (
					<code>
						{ row.name }
					</code>
				),
			},
			type: data.has_type && {
				heading: _x( 'Type', 'transient type', 'query-monitor' ),
				render: ( row ) => ( row.type ),
			},
			expiration: {
				heading: __( 'Expiration', 'query-monitor' ),
				render: ( row ) => (
					<>
						{ row.expiration ? (
							<>
								{ row.expiration }
								<span className="qm-info">
									(~{ row.exp_diff })
								</span>
							</>
						) : (
							<em>
								{ __( 'none', 'query-monitor' ) }
							</em>
						) }
					</>
				),
			},
			size: {
				className: 'qm-num',
				heading: _x( 'Size', 'size of transient value', 'query-monitor' ),
				render: ( row ) => (
					<>
						~{ row.size_formatted }
					</>
				),
			},
			caller: {
				heading: __( 'Caller', 'query-monitor' ),
				render: ( row ) => <Caller trace={ row.trace } />,
			},
			component: {
				heading: __( 'Component', 'query-monitor' ),
				render: ( row ) => <Component component={ row.trace.component } />,
			},
		} }
		data={ data.trans }
	/>
};
