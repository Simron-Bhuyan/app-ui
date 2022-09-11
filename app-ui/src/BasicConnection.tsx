import React, { memo } from 'react';
import createEngine, {
	DefaultLinkModel,
	DefaultNodeModel,
	DiagramModel,
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

function BasicConnection() {
	const engine = createEngine();
	const node1 = new DefaultNodeModel({
		name: 'Destination',
		color: 'green',
	});
	node1.setPosition(10, 10);
	let port1 = node1.addOutPort('In');
	const node2 = new DefaultNodeModel({
		name: 'Source',
		color: 'red',
	});
	node2.setPosition(1000, 500);
	let port2 = node2.addOutPort('Out');
	
	const link = port1.link<DefaultLinkModel>(port2);
	// const link2 = port3.link<DefaultLinkModel>(port4);
	link.addLabel('Link');
	const model = new DiagramModel();
	model.addAll(node1, node2, link);
	engine.setModel(model);
	return (
		<>
			<CanvasWidget engine={engine} />
		</>
	);
}

export default memo(BasicConnection);
