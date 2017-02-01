let expect = require('chai').expect;
let Sequelize = require('sequelize');
let db = require('../../server/db/models')
let supertest = require('supertest');

describe('Project Route', function () {

	let app, Project;

	beforeEacb('Sync app' function(){
		return db.sync({force: true});
	});

	beforeEach('Create app', function(){
		app = require('../../server/app')(db);
	})
})