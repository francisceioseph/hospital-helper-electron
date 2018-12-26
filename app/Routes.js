import React from 'react';
import { Switch } from 'react-router';

import NotFound from './components/NotFound';
import ProtectedRoute from './containers/ProtectedRoute';
import NoAuthRoute from './containers/NoAuthRoute';
import App from './containers/App';

import { Home } from './pages/Home';
import { Prontuario } from './pages/Prontuario';
import { SpecialtyList } from './pages/Specialty';
import { DoctorList, DoctorForm } from './pages/Doctors';
import { PacientList, PacientForm } from './pages/Pacient';
import { ExamList, ExamForm } from './pages/Exams';
import { AppointmentList, AppointmentForm } from './pages/Appointments';
import { SurgeryList } from './pages/Surgery';
import { LoginPage } from './pages/Login';
import { AppointmentTypeList } from './pages/AppointmentTypes';
import { ExamTypeList } from './pages/ExamTypes';
import { PanelLayout } from './containers/layouts';
import RoleFormComponent from './pages/Roles/components/role.form.component';

export default () => (
  <App>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <NoAuthRoute exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/prontuarios" component={Prontuario} />
      <ProtectedRoute
        exact
        path="/cadastros/tipo-atendimento"
        component={AppointmentTypeList}
      />
      <ProtectedRoute
        exact
        path="/cadastros/tipo-exame"
        component={ExamTypeList}
      />
      <ProtectedRoute
        exact
        path="/cadastros/especialidade"
        component={SpecialtyList}
      />
      <ProtectedRoute exact path="/cadastros/medicos" component={DoctorList} />
      <ProtectedRoute
        exact
        path="/cadastros/medicos/novo"
        component={DoctorForm}
      />
      <ProtectedRoute
        exact
        path="/cadastros/pacientes"
        component={PacientList}
      />
      <ProtectedRoute
        exact
        path="/cadastros/pacientes/novo"
        component={PacientForm}
      />
      <ProtectedRoute exact path="/marcacoes/exames" component={ExamList} />
      <ProtectedRoute
        exact
        path="/marcacoes/exames/novo"
        component={ExamForm}
      />
      <ProtectedRoute
        exact
        path="/marcacoes/consultas"
        component={AppointmentList}
      />
      <ProtectedRoute
        exact
        path="/marcacoes/consultas/novo"
        component={AppointmentForm}
      />
      <ProtectedRoute
        exact
        path="/marcacoes/cirurgias"
        component={SurgeryList}
      />
      <ProtectedRoute
        exact
        path="/cadastros/perfis-acesso"
        component={RoleFormComponent}
      />
      <PanelLayout component={NotFound} />
    </Switch>
  </App>
);
