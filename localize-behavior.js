import '@polymer/polymer/polymer-legacy.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';

/* eslint-disable */
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.D2LActivityExemptions = window.D2L.PolymerBehaviors.D2LActivityExemptions || {};
/**
 * THIS FILE IS GENERATED. RUN `npm run build:lang` TO REGENERATE.
 * Localizes the D2LActivityExemptions component.
 * @polymerBehavior D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehavior
 */
D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources.
		 */
		resources: {
			value: function() {
				return {"ar-SA":{"ariaExempt":"إعفاء المستخدمين المحددين","ariaLoadMore":"تحميل مستخدمين إضافيين","ariaSearchButton":"البحث عن مستخدمين","ariaSelectExemptUser":"{fullName} المحدد/المحددة معفى/معفية","ariaSelectNotExemptUser":"{fullName} المحدد/المحددة غير معفى/غير معفية","ariaSelectUnselectAll":"تحديد / إلغاء تحديد الكل","ariaTableSummary":"قائمة المستخدمين الذين يمكن تعديل حالة الإعفاء الخاصة بهم.","ariaUnexempt":"إلغاء إعفاء المستخدمين المحددين","btnClearSearch":"مسح البحث","btnExempt":"إعفاء","btnLoadMore":"تحميل المزيد...","btnUnexempt":"إلغاء الإعفاء","lblAnonymousUser":"مستخدم مجهول","lblCheckSpelling":"يرجى إجراء تدقيق إملائي أو تعديل البحث.","lblExempt":"إعفاء","lblExemptStatus":"حالة الإعفاء","lblExemptionCount":"الإعفاءات: {exemptionCount}","lblExemptions":"الإعفاءات","lblFirstName":"الاسم الأول","lblLastName":"اسم العائلة","lblNoPermission":"قد لا تملك أذونات قائمة الصفوف أو لا يتمتّع أي من المستخدمين بخصائص الدور \"يمكن وضع علامة في العلامات\".","lblNoResultsFound":"لم يتم العثور على نتائج لـ <strong>{queryTerm}</strong>.","lblNoUsers":"لم يتم العثور على مستخدمين.","lblNotExempt":"غير معفى","lblOrgDefinedId":"معرِّف المؤسسة المحدد","lblSearchPlaceholder":"البحث عن...","lblUser":"مستخدم","toastCouldNotLoad":"يتعذّر تحميل بيانات إعفاء النشاط","toastExempt":"تم الحفظ بنجاح. لم يتم حفظ أي شيء | تم الحفظ بنجاح. تم إعفاء مستخدم واحد. | تم الحفظ بنجاح. تم إعفاء {count} من المستخدمين.","toastUnexempt":"تم الحفظ بنجاح. لم يتم حفظ أي شيء | تم الحفظ بنجاح. تم إلغاء إعفاء مستخدم واحد. | تم الحفظ بنجاح. تم إلغاء إعفاء {count} من المستخدمين."},"de-DE":{"ariaExempt":"Ausgewählte Benutzer ausnehmen","ariaLoadMore":"Zusätzliche Nutzer laden","ariaSearchButton":"Benutzer suchen","ariaSelectExemptUser":"{fullName} als Ausnahme auswählen","ariaSelectNotExemptUser":"{fullName} als Ausnahme abwählen","ariaSelectUnselectAll":"Alle/keine auswählen","ariaTableSummary":"Die Liste der Benutzer, deren Ausnahmestatus geändert werden kann.","ariaUnexempt":"Ausgewählte Benutzer als Ausnahme abwählen","btnClearSearch":"Suche löschen","btnExempt":"Ausgenommen","btnLoadMore":"Weitere laden...","btnUnexempt":"Nicht ausgenommen","lblAnonymousUser":"Anonymer Benutzer","lblCheckSpelling":"Prüfen Sie Ihre Rechtschreibung, oder ändern Sie Ihre Suche.","lblExempt":"Ausgenommen","lblExemptStatus":"Ausnahmestatus","lblExemptionCount":"Ausnahmen: {exemptionCount}","lblExemptions":"Ausnahmen","lblFirstName":"Vorname","lblLastName":"Nachname","lblNoPermission":"Sie haben möglicherweise keine Berechtigung, auf die Teilnehmerliste zuzugreifen, oder keine Benutzer verfügen über die Rolleneigenschaft „Kann mit Noten benotet werden“.","lblNoResultsFound":"Keine Ergebnisse für <strong>{queryTerm}</strong>.","lblNoUsers":"Keine Benutzer gefunden.","lblNotExempt":"Nicht ausgenommen","lblOrgDefinedId":"Organisationsspezifische ID","lblSearchPlaceholder":"Suchen nach …","lblUser":"Benutzer","toastCouldNotLoad":"Es konnten keine Aktivitäts-Ausnahmedaten geladen werden.","toastExempt":"Gespeichert. Nichts gespeichert | Gespeichert. 1 Benutzer ausgenommen. | Gespeichert. {count} Benutzer ausgenommen.","toastUnexempt":"Gespeichert. Nichts gespeichert | Gespeichert. 1 Benutzer nicht ausgenommen. | Gespeichert. {count} Benutzer nicht ausgenommen."},"en":{"ariaExempt":"Exempt selected users","ariaLoadMore":"Load additional users","ariaSelectUnselectAll":"Select / Unselect all","ariaSelectExemptUser":"Select {fullName} exempt","ariaSelectNotExemptUser":"Select {fullName} not exempt","ariaTableSummary":"The list of users that can have their exemption status modified.","ariaUnexempt":"Unexempt selected users","ariaSearchButton":"Search users","lblAnonymousUser":"Anonymous User","lblUser":"User","lblExempt":"Exempt","lblNotExempt":"Not Exempt","lblExemptionCount":"Exemptions: {exemptionCount}","lblExemptions":"Exemptions","lblLastName":"Last Name","lblFirstName":"First Name","lblExemptStatus":"Exempt Status","lblOrgDefinedId":"Org Defined Id","lblSearchPlaceholder":"Search For…","lblNoResultsFound":"No results found for <strong>{queryTerm}</strong>.","lblCheckSpelling":"Please check your spelling or modify your search.","lblNoUsers":"No users found.","lblNoPermission":"You may not have Classlist permission or no users have the role property of 'Can be graded in grades'.","btnClearSearch":"Clear Search","btnExempt":"Exempt","btnUnexempt":"Unexempt","btnLoadMore":"Load More...","toastExempt":"Saved successfully. Nothing saved | Saved successfully. 1 user exempted. | Saved successfully. {count} users exempted.","toastUnexempt":"Saved successfully. Nothing saved | Saved successfully. 1 user unexempted. | Saved successfully. {count} users unexempted.","toastCouldNotLoad":"Could not load activity exemption data"},"es-MX":{"ariaExempt":"Usuarios seleccionados eximidos","ariaLoadMore":"Cargar usuarios adicionales","ariaSearchButton":"Buscar usuarios","ariaSelectExemptUser":"{fullName} está eximido","ariaSelectNotExemptUser":"{fullName} no está eximido","ariaSelectUnselectAll":"Seleccionar/No seleccionar todos","ariaTableSummary":"Lista de usuarios a los que se les puede modificar su estado de eximición.","ariaUnexempt":"Usuarios seleccionados no eximidos","btnClearSearch":"Borrar búsqueda","btnExempt":"Eximido","btnLoadMore":"Cargar más…","btnUnexempt":"No eximido","lblAnonymousUser":"Usuario anónimo","lblCheckSpelling":"Verifique la ortografía o modifique la búsqueda.","lblExempt":"Eximido","lblExemptStatus":"Estado de eximición","lblExemptionCount":"Eximiciones: {exemptionCount}","lblExemptions":"Eximiciones","lblFirstName":"Nombre","lblLastName":"Apellido","lblNoPermission":"Es posible que no tenga el permiso de listado de alumnos o que ningún usuario tenga la propiedad de rol de “Se puede calificar con calificaciones”.","lblNoResultsFound":"No se encontraron resultados para <strong>{queryTerm}</strong>.","lblNoUsers":"No se encontraron usuarios.","lblNotExempt":"No eximido","lblOrgDefinedId":"ID definida por organización","lblSearchPlaceholder":"Buscar…","lblUser":"Usuario","toastCouldNotLoad":"No se pudieron cargar los datos de eximición de actividades","toastExempt":"Se guardó correctamente. No se guardó información | Se guardó correctamente. Un usuario eximido. | Se guardado correctamente. {count} usuarios eximidos.","toastUnexempt":"Se guardó correctamente. No se guardó información | Se guardó correctamente. Un usuario no eximido. | Se guardado correctamente. {count} usuarios no eximidos."},"fr-CA":{"ariaExempt":"Exempter les utilisateurs sélectionnés","ariaLoadMore":"Charger des utilisateurs supplémentaires","ariaSearchButton":"Rechercher des utilisateurs","ariaSelectExemptUser":"{fullName} exempté(e)","ariaSelectNotExemptUser":"{fullName} non exempté(e)","ariaSelectUnselectAll":"Tout sélectionner / Tout désélectionner","ariaTableSummary":"Liste des utilisateurs dont l'état d'exemption peut être modifié.","ariaUnexempt":"Annuler l'exemption des utilisateurs sélectionnés","btnClearSearch":"Effacer la recherche","btnExempt":"Exempter","btnLoadMore":"En voir plus...","btnUnexempt":"Annuler l'exemption","lblAnonymousUser":"Utilisateur anonyme","lblCheckSpelling":"Veuillez vérifier l’orthographe ou modifier votre recherche.","lblExempt":"Exempté","lblExemptStatus":"État d'exemption","lblExemptionCount":"Exemptions : {exemptionCount}","lblExemptions":"Exemptions","lblFirstName":"Prénom","lblLastName":"Nom de famille","lblNoPermission":"Vous ne possédez peut-être pas l’autorisation Liste des inscrits au cours, ou aucun utilisateur ne comprend la propriété de rôle « Ajouter ce rôle à la liste d’utilisateurs pouvant être notés ».","lblNoResultsFound":"Aucun résultat trouvé pour <strong>{queryTerm}</strong>.","lblNoUsers":"Aucun utilisateur trouvé.","lblNotExempt":"Non exempté","lblOrgDefinedId":"ID défini par l'organisation","lblSearchPlaceholder":"Recherche de…","lblUser":"Utilisateur","toastCouldNotLoad":"Échec de chargement des données d'exemption de l'activité","toastExempt":"Enregistrement réussi. Échec de l'enregistrement | Enregistrement réussi. 1 utilisateur exempté. | Enregistrement réussi. {count} utilisateurs exemptés.","toastUnexempt":"Enregistrement réussi. Échec de l'enregistrement | Enregistrement réussi. Annulation de l'exemption d'un utilisateur. | Enregistrement réussi. Annulation de l'exemption de {count} utilisateurs."},"ja-JP":{"ariaExempt":"選択したユーザーの免除","ariaLoadMore":"他のユーザーの読み込み","ariaSearchButton":"ユーザーの検索","ariaSelectExemptUser":"{fullName} の免除の選択","ariaSelectNotExemptUser":"{fullName} の免除対象外の選択","ariaSelectUnselectAll":"すべて選択／選択解除","ariaTableSummary":"免除ステータスが変更された可能性のあるユーザーのリスト","ariaUnexempt":"選択したユーザーの免除解除","btnClearSearch":"検索のクリア","btnExempt":"免除","btnLoadMore":"さらに読み込む...","btnUnexempt":"免除解除","lblAnonymousUser":"匿名ユーザー","lblCheckSpelling":"スペルに誤りがないか確認してください。または検索する内容を変更してください。","lblExempt":"免除","lblExemptStatus":"免除ステータス","lblExemptionCount":"免除数: {exemptionCount}","lblExemptions":"免除","lblFirstName":"名","lblLastName":"姓","lblNoPermission":"クラスリスト権限を持っていないか、またはどのユーザーも「成績で成績分類可能」の役割プロパティを持っていない可能性があります。","lblNoResultsFound":"<strong>{queryTerm}</strong>に対する結果が見つかりません。","lblNoUsers":"ユーザーが見つかりません。","lblNotExempt":"免除対象外","lblOrgDefinedId":"組織定義 ID","lblSearchPlaceholder":"検索対象…","lblUser":"ユーザー","toastCouldNotLoad":"アクティビティ免除データを読み込めませんでした","toastExempt":"正常に保存されました。保存するものはありませんでした。 | 正常に保存されました。1 人のユーザーが免除されました。 | 正常に保存されました。{count} 人のユーザーが免除されました。","toastUnexempt":"正常に保存されました。保存するものはありませんでした。 | 正常に保存されました。1 人のユーザーが免除解除されました。 | 正常に保存されました。{count} 人のユーザーが免除解除されました。"},"ko-KR":{"ariaExempt":"선택된 사용자 면제","ariaLoadMore":"추가 사용자 로드","ariaSearchButton":"사용자 검색","ariaSelectExemptUser":"{fullName} 선택 면제","ariaSelectNotExemptUser":"{fullName} 선택 면제하지 않음","ariaSelectUnselectAll":"모두 선택 / 선택 해제","ariaTableSummary":"면제 상태를 가질 수 있는 사용자 목록이 수정되었습니다.","ariaUnexempt":"선택된 사용자 면제 취소","btnClearSearch":"검색 지우기","btnExempt":"면제","btnLoadMore":"더 많이 로드...","btnUnexempt":"면제 취소","lblAnonymousUser":"익명 사용자","lblCheckSpelling":"철자를 확인하거나 검색 내용을 수정해 보십시오.","lblExempt":"면제","lblExemptStatus":"면제 상태","lblExemptionCount":"면제: {exemptionCount}","lblExemptions":"면제","lblFirstName":"이름","lblLastName":"성","lblNoPermission":"학급 명부 권한이 없거나 '평점에서 평점 산정될 수 있음' 역할 속성을 가진 사용자가 없을 수 있습니다.","lblNoResultsFound":"<strong>{queryTerm}</strong>에 대한 검색 결과가 없습니다.","lblNoUsers":"사용자를 찾을 수 없음.","lblNotExempt":"면제하지 않음","lblOrgDefinedId":"구성 지정 ID","lblSearchPlaceholder":"검색 내용...","lblUser":"사용자","toastCouldNotLoad":"활동 면제 데이터를 로드할 수 없음","toastExempt":"성공적으로 저장되었습니다. 저장된 항목이 없습니다. | 성공적으로 저장되었습니다. 사용자 1명이 면제되었습니다. | 성공적으로 저장되었습니다. 사용자 {count}명이 면제되었습니다.","toastUnexempt":"성공적으로 저장되었습니다. 저장된 항목이 없습니다. | 성공적으로 저장되었습니다. 사용자 1명이 면제 취소되었습니다. | 성공적으로 저장되었습니다. 사용자 {count}명이 면제 취소되었습니다."},"nb-NO":{"ariaExempt":"Frita valgte brukere","ariaLoadMore":"Last inn flere brukere","ariaSelectExemptUser":"Velg at {fullName} er fritatt","ariaSelectNotExemptUser":"Velg at {fullName} ikke er fritatt","ariaSelectUnselectAll":"Velg / Opphev valg","ariaTableSummary":"Listen over brukere det er mulig å endre fritaksstatusen for.","ariaUnexempt":"Opphev fritak av valgte brukere","btnExempt":"Frita","btnLoadMore":"Last inn flere ...","btnUnexempt":"Opphev fritak","lblAnonymousUser":"Anonym bruker","lblExempt":"Frita","lblExemptStatus":"Fritaksstatus","lblExemptionCount":"Fritak: {exemptionCount}","lblExemptions":"Fritak","lblFirstName":"Fornavn","lblLastName":"Etternavn","lblNotExempt":"Ikke fritatt","lblOrgDefinedId":"Organisasjonsdefinert ID","lblUser":"Bruker","toastCouldNotLoad":"Kunne ikke laste inn data om aktivitetsfritak","toastExempt":"Lagret. Ingenting lagret | Lagret. 1 bruker fritatt. | Lagret. {count} brukere fritatt.","toastUnexempt":"Lagret. Ingenting lagret | Lagret. Opphevet fritak for 1 bruker. | Lagret. Opphevet fritak for {count} brukere."},"nl-NL":{"ariaExempt":"Geselecteerde gebruikers vrijstellen","ariaLoadMore":"Meer gebruikers laden","ariaSearchButton":"Gebruikers zoeken","ariaSelectExemptUser":"Geselecteerde {fullName} vrijstellen","ariaSelectNotExemptUser":"Geselecteerde {fullName} niet vrijstellen","ariaSelectUnselectAll":"Alles selecteren/deselecteren","ariaTableSummary":"De lijst met gebruikers waarvan de vrijstellingsstatus kan worden gewijzigd.","ariaUnexempt":"Vrijstelling geselecteerde gebruikers opheffen","btnClearSearch":"Zoekopdracht wissen","btnExempt":"Vrijstellen","btnLoadMore":"Meer laden...","btnUnexempt":"Vrijstelling opheffen","lblAnonymousUser":"Anonieme gebruiker","lblCheckSpelling":"Controleer de spelling of wijzig uw zoekopdracht.","lblExempt":"Vrijstellen","lblExemptStatus":"Vrijstellingsstatus","lblExemptionCount":"Vrijstellingen: {exemptionCount}","lblExemptions":"Vrijstellingen","lblFirstName":"Voornaam","lblLastName":"Achternaam","lblNoPermission":"U hebt mogelijk geen groepslijstmachtiging of er zijn geen gebruikers met de roleigenschap 'Kan scores krijgen in Scores'.","lblNoResultsFound":"Geen resultaten gevonden voor <strong>{queryTerm}</strong>.","lblNoUsers":"Geen gebruikers gevonden.","lblNotExempt":"Geen vrijstelling","lblOrgDefinedId":"Door organisatie gedefinieerde id","lblSearchPlaceholder":"Zoeken naar...","lblUser":"Gebruiker","toastCouldNotLoad":"Vrijstellingsgegevens van activiteit kunnen niet worden geladen","toastExempt":"Opgeslagen. Niets opgeslagen | Opgeslagen. Vrijstelling voor 1 gebruiker. | Opgeslagen. Vrijstelling voor {count} gebruikers.","toastUnexempt":"Opgeslagen. Niets opgeslagen | Opgeslagen. Vrijstelling voor 1 gebruiker opgeheven. | Opgeslagen. Vrijstelling voor {count} gebruikers opgeheven."},"pt-BR":{"ariaExempt":"Isentar usuários selecionados","ariaLoadMore":"Carregar usuários adicionais","ariaSearchButton":"Pesquisar usuários","ariaSelectExemptUser":"Selecionar {fullName} isento","ariaSelectNotExemptUser":"Selecionar {fullName} não isento","ariaSelectUnselectAll":"Marcar/Desmarcar tudo","ariaTableSummary":"A lista de usuários cujo status de isenção pode ser modificado.","ariaUnexempt":"Usuários não isentos selecionados","btnClearSearch":"Limpar Pesquisa","btnExempt":"Isento","btnLoadMore":"Carregar Mais...","btnUnexempt":"Não isento","lblAnonymousUser":"Usuário Anônimo","lblCheckSpelling":"Verifique a ortografia ou modifique a pesquisa.","lblExempt":"Isento","lblExemptStatus":"Status de Isento","lblExemptionCount":"Isenções: {exemptionCount}","lblExemptions":"Isenções","lblFirstName":"Nome","lblLastName":"Sobrenome","lblNoPermission":"Você pode não ter a permissão Lista de Classe ou nenhum usuário tem a propriedade de função “Pode ser avaliado em notas”.","lblNoResultsFound":"Nenhum resultado encontrado para <strong>{queryTerm}</strong>.","lblNoUsers":"Nenhum usuário encontrado.","lblNotExempt":"Não Isento","lblOrgDefinedId":"ID Definido da Organização","lblSearchPlaceholder":"Pesquisar…","lblUser":"Usuário","toastCouldNotLoad":"Não foi possível carregar dados de isenção da atividade","toastExempt":"Salvo com sucesso. Nada foi salvo | Salvo com sucesso. 1 usuário isento. | Salvo com sucesso. {count} usuários isentos.","toastUnexempt":"Salvo com sucesso. Nada foi salvo | Salvo com sucesso. 1 usuário não isento. | Salvo com sucesso. {count} usuários não isentos."},"sv-SE":{"ariaExempt":"Ta bort valda användare","ariaLoadMore":"Läs in fler användare","ariaSearchButton":"Sök användare","ariaSelectExemptUser":"{fullName} undantagen","ariaSelectNotExemptUser":"{fullName} inte undantagen","ariaSelectUnselectAll":"Markera/avmarkera alla","ariaTableSummary":"Listan över användare vars undantagsstatus kan ändras.","ariaUnexempt":"Lägg till valda användare","btnClearSearch":"Rensa sökning","btnExempt":"Undantagen","btnLoadMore":"Ladda mer ...","btnUnexempt":"Inte undantagen","lblAnonymousUser":"Anonym användare","lblCheckSpelling":"Kontrollera stavningen eller justera din sökning.","lblExempt":"Undantagen","lblExemptStatus":"Undantagsstatus","lblExemptionCount":"Undantag: {exemptionCount}","lblExemptions":"Undantag","lblFirstName":"Förnamn","lblLastName":"Efternamn","lblNoPermission":"Du kanske inte har behörighet att visa klasslistan eller så har inga användare rollegenskapen \"Kan betygsättas med betyg\".","lblNoResultsFound":"Inga resultat för <strong>{queryTerm}</strong>.","lblNoUsers":"Inga användare hittades.","lblNotExempt":"Inte undantagen","lblOrgDefinedId":"Organisationsdefinierat ID","lblSearchPlaceholder":"Sök efter ...","lblUser":"Användare","toastCouldNotLoad":"Det gick inte att läsa in undantagsdata för aktiviteten","toastExempt":"Har sparats. Inget sparades | Har sparats. 1 användare undantas. | Har sparats. {Count} användare undantas.","toastUnexempt":"Har sparats. Inget sparades | Har sparats. 1 användare undantas inte. | Har sparats. {Count} användare undantas inte."},"tr-TR":{"ariaExempt":"Seçili kullanıcıları muaf tut","ariaLoadMore":"Daha fazla kullanıcı yükle","ariaSearchButton":"Kullanıcı ara","ariaSelectExemptUser":"Seçili olan {fullName} muaftır","ariaSelectNotExemptUser":"Seçili olan {fullName} muaf değildir","ariaSelectUnselectAll":"Seç / Seçimi Kaldır","ariaTableSummary":"Muafiyet durumunu değiştirebilecek kullanıcıların listesi.","ariaUnexempt":"Seçili kullanıcıların muafiyetini kaldır","btnClearSearch":"Aramayı Temizle","btnExempt":"Muaf Tut","btnLoadMore":"Daha Fazla Yükle...","btnUnexempt":"Muafiyetini Kaldır","lblAnonymousUser":"Anonim Kullanıcı","lblCheckSpelling":"Lütfen yazım hatası yapıp yapmadığınızı kontrol edin veya aramanızı değiştirin.","lblExempt":"Muaf Tut","lblExemptStatus":"Muafiyet Durumu","lblExemptionCount":"Muafiyetler: {exemptionCount}","lblExemptions":"Muafiyetler","lblFirstName":"Adı","lblLastName":"Soyadı","lblNoPermission":"Sınıf listesi izniniz olmayabilir veya hiçbir kullanıcı \"Notlarda notlandırılabilir\" rol özelliğine sahip değildir.","lblNoResultsFound":"<strong>{queryTerm}</strong> için sonuç bulunamadı.","lblNoUsers":"Kullanıcı bulunamadı.","lblNotExempt":"Muaf Değil","lblOrgDefinedId":"Org Tanımlı Kimlik","lblSearchPlaceholder":"Ara:","lblUser":"Kullanıcı","toastCouldNotLoad":"Etkinlik muafiyeti verileri yüklenemedi","toastExempt":"Başarıyla kaydedildi. Hiçbir şey kaydedilmedi | Başarıyla kaydedildi. 1 kullanıcı muaf tutuldu. | Başarıyla kaydedildi. {Count} kullanıcı muaf tutuldu.","toastUnexempt":"Başarıyla kaydedildi. Hiçbir şey kaydedilmedi | Başarıyla kaydedildi. 1 kullanıcının muafiyeti kaldırıldı. | Başarıyla kaydedildi. {Count} kullanıcının muafiyeti kaldırıldı."},"zh-CN":{"ariaExempt":"免除选定用户","ariaLoadMore":"加载其他用户","ariaSearchButton":"搜索用户","ariaSelectExemptUser":"选定 {fullName} 已免除","ariaSelectNotExemptUser":"选定 {fullName} 未免除","ariaSelectUnselectAll":"全选 / 取消全选","ariaTableSummary":"可修改免除状态的用户列表。","ariaUnexempt":"取消免除所选用户","btnClearSearch":"清除搜索","btnExempt":"免除","btnLoadMore":"加载更多...","btnUnexempt":"取消免除","lblAnonymousUser":"匿名用户","lblCheckSpelling":"请检查您的拼写或修改搜索词。","lblExempt":"免除","lblExemptStatus":"免除状态","lblExemptionCount":"免除：{exemptionCount}","lblExemptions":"免除","lblFirstName":"名字","lblLastName":"姓氏","lblNoPermission":"您可能没有班级名册权限，或没有用户具有“可以在成绩中分级”的角色属性。","lblNoResultsFound":"未找到 <strong>{queryTerm}</strong> 的结果。","lblNoUsers":"未找到任何用户。","lblNotExempt":"未免除","lblOrgDefinedId":"组织定义 ID","lblSearchPlaceholder":"搜索…","lblUser":"用户","toastCouldNotLoad":"无法加载活动免除数据","toastExempt":"已成功保存。未保存任何内容 | 已成功保存。1 名用户已免除。 | 已成功保存。{count} 名用户已免除。","toastUnexempt":"已成功保存。未保存任何内容 | 已成功保存。1 名用户已取消免除。 | 已成功保存。{count} 名用户已取消免除。"},"zh-TW":{"ariaExempt":"免除所選使用者","ariaLoadMore":"載入其他使用者","ariaSearchButton":"搜尋使用者","ariaSelectExemptUser":"選擇免除 {fullName}","ariaSelectNotExemptUser":"選擇取消免除 {fullName}","ariaSelectUnselectAll":"全選 / 取消全選","ariaTableSummary":"可修改其免除狀態之使用者的清單。","ariaUnexempt":"取消免除所選使用者","btnClearSearch":"清除搜尋","btnExempt":"免除","btnLoadMore":"載入其他...","btnUnexempt":"取消免除","lblAnonymousUser":"匿名使用者","lblCheckSpelling":"請檢查拼字或修改搜尋。","lblExempt":"免除","lblExemptStatus":"免除狀態","lblExemptionCount":"免修學分：{exemptionCount}","lblExemptions":"免修學分","lblFirstName":"名字","lblLastName":"姓氏","lblNoPermission":"您可能沒有班級名冊權限，或沒有使用者擁有「可在成績中評分」的角色屬性。","lblNoResultsFound":"找不到 <strong>{queryTerm}</strong> 的搜尋結果。","lblNoUsers":"找不到使用者。","lblNotExempt":"未免除","lblOrgDefinedId":"組織定義 ID","lblSearchPlaceholder":"搜尋...","lblUser":"使用者","toastCouldNotLoad":"無法載入活動免除學分資料","toastExempt":"已成功儲存。沒有儲存任何項目 | 已成功儲存。1 位使用者已免除。| 已成功儲存。{count} 位使用者已免除。","toastUnexempt":"已成功儲存。沒有儲存任何項目 | 已成功儲存。1 位使用者已取消免除。| 已成功儲存。{count} 位使用者已取消免除。"}};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehavior */
D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehaviorImpl
];