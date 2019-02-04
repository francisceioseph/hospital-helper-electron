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
import { SurgeryList, SurgeryForm } from './pages/Surgeries';
import { LoginPage } from './pages/Login';
import { AppointmentTypeList } from './pages/AppointmentTypes';
import { ExamTypeList } from './pages/ExamTypes';
import { ListRoles, RoleForm } from './pages/Roles';
import { PanelLayout } from './containers/layouts';
import { SurgeryTypeList } from './pages/SurgeryTypes';
import { Profile } from './pages/Profile';

export default () => (
  <App>
    <Switch>
      <NoAuthRoute exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/prontuarios" component={Prontuario} />
      
      <ProtectedRoute
        exact
        path="/configuracoes/tipo-atendimento"
        component={AppointmentTypeList}
      />
      <ProtectedRoute
        exact
        path="/configuracoes/tipo-exame"
        component={ExamTypeList}
      />
      <ProtectedRoute
        exact
        path="/configuracoes/tipo-cirurgia"
        component={SurgeryTypeList}
      />
      <ProtectedRoute
        exact
        path="/configuracoes/especialidade"
        component={SpecialtyList}
      />
      <ProtectedRoute exact path="/usuarios/medicos" component={DoctorList} />
      <ProtectedRoute
        exact
        path="/usuarios/medicos/novo"
        component={DoctorForm}
      />
      <ProtectedRoute
        exact
        path="/usuarios/pacientes"
        component={PacientList}
      />
      <ProtectedRoute
        exact
        path="/usuarios/pacientes/novo"
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
        path="/marcacoes/cirurgias/novo"
        component={SurgeryForm}
      />
      <ProtectedRoute
        exact
        path="/configuracoes/perfis-acesso"
        component={ListRoles}
      />
      <ProtectedRoute
        exact
        path="/configuracoes/perfis-acesso/novo"
        component={RoleForm}
      />
      <PanelLayout component={NotFound} />
    </Switch>
  </App>
);
